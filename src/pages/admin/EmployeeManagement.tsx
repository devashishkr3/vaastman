import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Plus, Pencil, Trash2, Search, CheckCircle, XCircle, Key } from 'lucide-react';
import { User } from '@/types';
// import { getUsers, addUser, updateUser, deleteUser } from '@/utils/localStorage';

const url = import.meta.env.VITE_API_URL
const token = localStorage.getItem("accessToken");

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState<User[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<User | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', mobile: '' });

  useEffect(() => {
    loadEmployees();
  }, []);

  useEffect(() => {
    const filtered = employees.filter(emp =>
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEmployees(filtered);
  }, [searchTerm, employees]);

  const loadEmployees = async () => {
    // const users = getUsers().filter(u => u.role === 'EMPLOYEE');


    try {
      const response = await fetch(`${url}/api/v1/admin/employees`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Failed to fetch employees:", errorData);
        return null;
      }

      const result = await response.json();
      setEmployees(result.data);
      setFilteredEmployees(result.data);
      console.log("Employees fetched successfully:", result.data);
      return result.data;
    } catch (error) {
      console.error("Error fetching employees:", error);
      return null;
    }
    // setEmployees(users);
    // setFilteredEmployees(users);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      toast.error('Please fill in all fields');
      return;
    } else if (formData.password.length < 6) {
      toast.error('Password must be Greater than 6 character');
      return;
    }

    if (editingEmployee) {
      //updateing employee
      try {
        const response = await fetch(`${url}/api/v1/admin/employees/${editingEmployee.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Failed to update employee:", errorData);
          return null;
        }

        const result = await response.json();
        toast.success('Employee updated successfully');
        console.log("Employee updated successfully:", result);
        return result;
      } catch (error) {
        console.error("Error updating employee: ", error);
        toast.error("Error updating employee")
        return null;
      }


      // updateUser(editingEmployee.id, formData);

    } else {
      //creating new employee
      try {
        const response = await fetch(`${url}/api/v1/admin/employees`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Failed to create employee:", errorData);
          return;
        }

        const result = await response.json();
        toast.success('Employee added successfully');
        console.log("Employee created successfully:", result);
      } catch (error) {
        toast.error("Error creating employee");
        console.error("Error creating employee:", error);
      }



      // const newEmployee: User = {
      //   id: Date.now().toString(),
      //   ...formData,
      //   role: 'EMPLOYEE',
      //   isActive: true,
      //   createdAt: new Date().toISOString(),
      //   // certificatesCreatedCount: 0
      // };
      // addUser(newEmployee);

    }
    loadEmployees();
    setIsModalOpen(false);
    setFormData({ name: '', email: '', password: '', mobile: '' });
  };

  const toggleStatus = async (employee: User) => {
    // updateUser(employee.id, { isActive: !employee.isActive });
    const token = "YOUR_ADMIN_JWT_TOKEN"; // Replace with a valid admin token

    try {
      const response = await fetch(`${url}/api/v1/admin/employees/${employee.id}/toggle`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Failed to toggle employee status:", errorData);
        return null;
      }

      const result = await response.json();
      toast.success(`Employee ${!employee.isActive ? 'activated' : 'deactivated'}`);
      loadEmployees();
      console.log("Employee status toggled successfully:", result);
      return result;
    } catch (error) {
      console.error("Error toggling employee status:", error);
      return null;
    }

  };

  // const resetPassword = (employee: User) => {
  //   const newPassword = 'reset123';
  //   updateUser(employee.id, { password: newPassword });
  //   toast.success(`Password reset to: ${newPassword}`);
  // };


  async function deleteEmployee(id) {

    try {
      const response = await fetch(`${url}/api/v1/admin/employees/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Failed to delete employee:", errorData);
        return null;
      }

      const result = await response.json();
      toast.success('Deleted'); loadEmployees();
      console.log("Employee deleted successfully:", result);
      return result;
    } catch (error) {
      console.error("Error deleting employee:", error);
      toast.error("Error deleting employee");
      return null;
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Employee Management</h1>
          <p className="text-muted-foreground">Manage employee accounts</p>
        </div>
        <Button onClick={() => { setEditingEmployee(null); setFormData({ name: '', email: '', password: '', mobile: '' }); setIsModalOpen(true); }}>
          <Plus className="h-4 w-4 mr-2" />Add Employee
        </Button>
      </div>

      <Card className="p-6">
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="Search employees..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEmployees.map((emp) => (
              <TableRow key={emp.id}>
                <TableCell className="font-medium">{emp.name}</TableCell>
                <TableCell>{emp.email}</TableCell>
                <TableCell>
                  <Badge variant={emp.isActive ? 'default' : 'secondary'}>
                    {emp.isActive ? 'Active' : 'Inactive'}
                  </Badge>
                </TableCell>
                <TableCell>{new Date(emp.createdAt).toLocaleDateString()}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" onClick={() => toggleStatus(emp)}>
                      {emp.isActive ? <XCircle className="h-4 w-4" /> : <CheckCircle className="h-4 w-4" />}
                    </Button>
                    {/* <Button variant="ghost" size="icon" onClick={() => resetPassword(emp)}>
                      <Key className="h-4 w-4" />
                    </Button> */}
                    <Button variant="ghost" size="icon" onClick={() => { setEditingEmployee(emp); setFormData({ name: emp.name, email: emp.email, password: emp.password, mobile: emp.mobile }); setIsModalOpen(true); }}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => { if (confirm('Delete employee?')) { deleteEmployee(emp.id);  } }}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingEmployee ? 'Edit' : 'Add'} Employee</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Name</Label>
              <Input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            </div>
            <div>
              <Label>Email</Label>
              <Input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            </div>
            <div>
              <Label>Password</Label>
              <Input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
            </div>
            <div>
              <Label>Phone No.</Label>
              <Input type="tel" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} />
            </div>
            <DialogFooter>
              <Button type="submit">{editingEmployee ? 'Update' : 'Add'}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EmployeeManagement;




