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
import { getUsers, addUser, updateUser, deleteUser } from '@/utils/localStorage';

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState<User[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<User | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

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

  const loadEmployees = () => {
    const users = getUsers().filter(u => u.role === 'employee');
    setEmployees(users);
    setFilteredEmployees(users);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      toast.error('Please fill in all fields');
      return;
    }

    if (editingEmployee) {
      updateUser(editingEmployee.id, formData);
      toast.success('Employee updated successfully');
    } else {
      const newEmployee: User = {
        id: Date.now().toString(),
        ...formData,
        role: 'employee',
        isActive: true,
        createdAt: new Date().toISOString(),
        certificatesCreatedCount: 0
      };
      addUser(newEmployee);
      toast.success('Employee added successfully');
    }
    loadEmployees();
    setIsModalOpen(false);
    setFormData({ name: '', email: '', password: '' });
  };

  const toggleStatus = (employee: User) => {
    updateUser(employee.id, { isActive: !employee.isActive });
    toast.success(`Employee ${!employee.isActive ? 'activated' : 'deactivated'}`);
    loadEmployees();
  };

  const resetPassword = (employee: User) => {
    const newPassword = 'reset123';
    updateUser(employee.id, { password: newPassword });
    toast.success(`Password reset to: ${newPassword}`);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Employee Management</h1>
          <p className="text-muted-foreground">Manage employee accounts</p>
        </div>
        <Button onClick={() => { setEditingEmployee(null); setFormData({ name: '', email: '', password: '' }); setIsModalOpen(true); }}>
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
                    <Button variant="ghost" size="icon" onClick={() => resetPassword(emp)}>
                      <Key className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => { setEditingEmployee(emp); setFormData({ name: emp.name, email: emp.email, password: emp.password }); setIsModalOpen(true); }}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => { if (confirm('Delete employee?')) { deleteUser(emp.id); toast.success('Deleted'); loadEmployees(); } }}>
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




