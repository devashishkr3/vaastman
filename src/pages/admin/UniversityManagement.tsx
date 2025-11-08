
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
import { getAllUniversity } from "@/utils/getData";
// import { getUniversities, addUniversity, updateUniversity, deleteUniversity } from "@/utils/localStorage";


const url = import.meta.env.VITE_API_URL
const token = localStorage.getItem("accessToken");


// Type
interface University {
    id: string;
    name: string;
    address: string;
    // code: string;
    createdAt: string;
}

// Component
const UniversityManagement = () => {
    const [universities, setUniversities] = useState<University[]>([]);
    const [filteredUniversities, setFilteredUniversities] = useState<University[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingUniversity, setEditingUniversity] = useState<University | null>(null);
    const [formData, setFormData] = useState({ name: "", address: "" });

    // Load universities
    useEffect(() => {
        getAllUniversities();
        // console.log(data)
        // setUniversities(data);
        // setFilteredUniversities(data);
    }, []);

    // Filter search
    useEffect(() => {
        const filtered = universities.filter(
            (u) =>
                u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                u.address.toLowerCase().includes(searchTerm.toLowerCase())
            // u.code.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUniversities(filtered);
    }, [searchTerm, universities]);



    async function getAllUniversities() {


        const data=await getAllUniversity()

        setUniversities(data);
        setFilteredUniversities(data);

        // try {
        //     const response = await fetch(`${url}/api/v1/admin/university`, {
        //         method: "GET",
        //         headers: {
        //             "Content-Type": "application/json",
        //             "Authorization": `Bearer ${token}`,
        //         },
        //     });

        //     if (!response.ok) {
        //         const errorData = await response.json();
        //         console.error("Failed to fetch universities:", errorData);
        //         return null;
        //     }

        //     const result = await response.json();
        //     setUniversities(result.data);
        //     setFilteredUniversities(result.data);
        //     console.log("Universities fetched successfully:", result.data);
        //     return result.data;
        // } catch (error) {
        //     console.error("Error fetching universities:", error);
        //     return null;
        // }
    }


    const handleOpenModal = (university?: University) => {
        if (university) {
            setEditingUniversity(university);
            setFormData({
                name: university.name,
                address: university.address,
                // code: university.code,
            });
        } else {
            setEditingUniversity(null);
            setFormData({ name: "", address: "" });
        }
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingUniversity(null);
        setFormData({ name: "", address: "" });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.address) {
            toast.error("Please fill all fields");
            return;
        }

        if (editingUniversity) {
            // updateUniversity(editingUniversity.id, formData);

            try {
                const response = await fetch(`${url}/api/v1/admin/university/${editingUniversity.id}`, {
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
                toast.success("University updated successfully");

                console.log('University created successfully:', data);
            } catch (error) {
                console.error('Request failed:', error);
            }

        } else {
            // const newUniversity: University = {
            //     id: Date.now().toString(),
            //     ...formData,
            //     createdAt: new Date().toISOString(),
            // };
            // addUniversity(newUniversity);

            try {
                const response = await fetch(`${url}/api/v1/admin/university`, {
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
                toast.success("University added successfully");

                console.log('University created successfully:', data);
            } catch (error) {
                console.error('Request failed:', error);
            }




        }
        getAllUniversities();
        // const data = getUniversities();
        // setUniversities(data);
        // setFilteredUniversities(data);
        handleCloseModal();
    };

    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this university?")) {
            try {
                const response = await fetch(`${url}/api/v1/admin/university/${id}`, {
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
                toast.success("University deleted successfully");
                getAllUniversities();
                console.log('University created successfully:', data);
            } catch (error) {
                console.error('Request failed:', error);
            }
            // deleteUniversity(id);
            // const data = getUniversities();
            // setUniversities(data);
            // setFilteredUniversities(data);
            
        }
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold mb-2">University Management</h1>
                    <p className="text-muted-foreground">
                        Manage universities and higher institutions
                    </p>
                </div>
                <Button onClick={() => handleOpenModal()}>
                    <Plus className="h-4 w-4 mr-2" /> Add University
                </Button>
            </div>

            <Card className="p-6">
                <div className="mb-4 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                        placeholder="Search universities..."
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
                                <TableHead>Location</TableHead>
                                {/* <TableHead>Code</TableHead> */}
                                <TableHead>Created At</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredUniversities.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                                        No universities found.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredUniversities.map((u) => (
                                    <TableRow key={u.id} className="hover:bg-muted/50">
                                        <TableCell className="font-medium">{u.name}</TableCell>
                                        <TableCell>{u.address}</TableCell>
                                        {/* <TableCell>
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                                {u.code}
                                            </span>
                                        </TableCell> */}
                                        <TableCell>{new Date(u.createdAt).toLocaleDateString()}</TableCell>
                                        <TableCell className="text-right flex justify-end gap-2">
                                            <Button variant="ghost" size="icon" onClick={() => handleOpenModal(u)}>
                                                <Pencil className="h-4 w-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon" onClick={() => handleDelete(u.id)}>
                                                <Trash2 className="h-4 w-4 text-destructive" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </Card>

            <Dialog open={isModalOpen} onOpenChange={handleCloseModal}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{editingUniversity ? "Edit University" : "Add University"}</DialogTitle>
                        <DialogDescription>
                            {editingUniversity
                                ? "Update the university information below"
                                : "Enter the details of the new university"}
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4 py-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">University Name</Label>
                                <Input
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="location">Location</Label>
                                <Input
                                    id="location"
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                />
                            </div>
                            {/* <div className="space-y-2">
                                <Label htmlFor="code">Code</Label>
                                <Input
                                    id="code"
                                    value={formData.code}
                                    onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                                />
                            </div> */}
                        </div>
                        <DialogFooter>
                            <Button variant="outline" type="button" onClick={handleCloseModal}>
                                Cancel
                            </Button>
                            <Button type="submit">{editingUniversity ? "Update" : "Add"}</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default UniversityManagement;
