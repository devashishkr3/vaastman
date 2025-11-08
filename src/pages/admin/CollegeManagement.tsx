import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { College, University } from "@/types";
import { getColleges, addCollege, updateCollege, deleteCollege, getUniversities } from "@/utils/localStorage";
import { getAllUniversity } from "@/utils/getData";

const url = import.meta.env.VITE_API_URL
const token = localStorage.getItem("accessToken");

// Component
const CollegeManagement = () => {
  const [colleges, setColleges] = useState<College[]>([]);
  const [filteredColleges, setFilteredColleges] = useState<College[]>([]);
  const [universities, setUniversities] = useState<University[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCollege, setEditingCollege] = useState<College | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    universityId: "",
    collegeCode: ""
  });

  // Load data from localStorage
  useEffect(() => {
    getAllUniversities();
    loadColleges();

    // const storedColleges = getColleges().map(c => ({
    //   ...c,
    //   code: c.code || "",
    //   createdAt: c.createdAt || new Date().toISOString(),
    // }));
    // setColleges(storedColleges);
  }, []);

  const getAllUniversities = async () => {
    const university = await getAllUniversity();
    setUniversities(university);
  }

  const loadColleges = async () => {
    try {
      const response = await fetch(`${url}/api/v1/admin/college`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        }
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Failed to fetch universities:", errorData);
        return null;
      }
      const result = await response.json();
      setColleges(result.data);
      setFilteredColleges(result.data);
      console.log(result);
    } catch (error) {
      console.log("Error fetching college data:", error)
    }
  }

  useEffect(() => {
    const filtered = colleges.filter(
      (u) =>
        u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.address.toLowerCase().includes(searchTerm.toLowerCase())
      // u.code.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredColleges(filtered);
  }, [searchTerm, colleges]);

  const handleOpenModal = (college?: College) => {
    if (college) {
      setEditingCollege(college);
      setFormData({
        name: college.name,
        universityId: college.universityId,
        address: college.address,
        collegeCode: college.collegeCode
      });
    } else {
      setEditingCollege(null);
      setFormData({ name: "", address: "", universityId: "", collegeCode: "" });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingCollege(null);
    setFormData({ name: "", address: "", universityId: "", collegeCode: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.universityId) {
      toast.error("Please fill all fields");
      return;
    }

    if (editingCollege) {
      // Update college

      try {
        const response = await fetch(`${url}/api/v1/admin/college/${editingCollege.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // replace with actual token
          },
          body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (!response.ok) {
          console.error('Error:', data.error || data.message);
          return;
        }
        toast.success("College updated successfully");

        console.log('College updated successfully:', data);
      } catch (error) {
        console.error('Request failed:', error);
      }



      // const updated: College = {
      //   ...editingCollege,
      //   ...formData,
      //   createdAt: editingCollege.createdAt || new Date().toISOString(),
      // };
      // updateCollege(editingCollege.id, updated);
      // setColleges(prev =>
      //   prev.map(c => (c.id === updated.id ? updated : c))
      // );

    } else {
      //addind new college
      try {
        const response = await fetch(`${url}/api/v1/admin/college`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // replace with actual token
          },
          body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (!response.ok) {
          console.error('Error:', data.error || data.message);
          return;
        }
        toast.success("College added successfully");

        console.log('College created successfully:', data);
      } catch (error) {
        console.error('Request failed:', error);
      }


      // Add new college
      // const newCollege: College = {
      //   id: Date.now().toString(),
      //   ...formData,
      //   code: formData.code || "",
      //   createdAt: new Date().toISOString(),
      // };
      // addCollege(newCollege);
      // setColleges(prev => [...prev, newCollege]);

    }
    loadColleges();

    handleCloseModal();
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this college?")) {
      try {
        const response = await fetch(`${url}/api/v1/admin/college/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // replace with actual token
          },

        });

        const data = await response.json();

        if (!response.ok) {
          console.error('Error:', data.error || data.message);
          return;
        }
        toast.success("College deleted successfully");
        loadColleges();
        console.log('College created successfully:', data);
      } catch (error) {
        console.error('Request failed:', error);
      }
      // toast.success("College deleted successfully");
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">College Management</h1>
          <p className="text-muted-foreground">Manage colleges under universities</p>
        </div>
        <Button onClick={() => handleOpenModal()}>
          <Plus className="h-4 w-4 mr-2" /> Add College
        </Button>
      </div>

      <Card className="p-6">
        <div className="mb-4 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search colleges..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>University</TableHead>
                <TableHead>Code</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredColleges.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                    No colleges found.
                  </TableCell>
                </TableRow>
              ) : (
                filteredColleges.map((c) => {
                  const university = universities.find(u => u.id === c.universityId);
                  return (
                    <TableRow key={c.id} className="hover:bg-muted/50">
                      <TableCell className="font-medium">{c.name}</TableCell>
                      <TableCell>{university?.name || "-"}</TableCell>
                      <TableCell>{c.code}</TableCell>
                      <TableCell>{new Date(c.createdAt).toLocaleDateString()}</TableCell>
                      <TableCell className="text-right flex justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleOpenModal(c)}>
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(c.id)}>
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={handleCloseModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingCollege ? "Edit College" : "Add College"}</DialogTitle>
            <DialogDescription>
              {editingCollege
                ? "Update the college information below"
                : "Enter the details of the new college"}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">College Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">College Address</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="university">Select University</Label>
                <Select
                  value={formData.universityId}
                  onValueChange={(val) => setFormData(prev => ({ ...prev, universityId: val }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select University" />
                  </SelectTrigger>
                  <SelectContent>
                    {universities.map(u => (
                      <SelectItem key={u.id} value={u.id}>{u.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="code">College Code</Label>
                <Input
                  id="code"
                  value={formData.collegeCode}
                  onChange={(e) => setFormData({ ...formData, collegeCode: e.target.value })}
                />
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" type="button" onClick={handleCloseModal}>Cancel</Button>
              <Button type="submit">{editingCollege ? "Update" : "Add"}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CollegeManagement;
