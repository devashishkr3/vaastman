import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { Users, ArrowLeft } from 'lucide-react';
import logo from '@/assets/vaastman.png';

const EmployeeLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, isAuthenticated, role } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && role === 'EMPLOYEE') navigate('/employee/dashboard');
  }, [isAuthenticated, role, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const success = await login(email, password);
    setLoading(false);
    if (success && role === 'EMPLOYEE') {
      toast.success('Login successful!');
      navigate('/employee/dashboard');
    } else {
      toast.error('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50 to-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="space-y-3 text-center">
          <div className="mx-auto w-fit p-3  rounded-full">
            {/* <Users className="h-10 w-10 text-primary" /> */}
            <img src={logo} className='w-[90px]' alt="" />
          </div>
          <CardTitle className="text-3xl font-bold">Employee Login</CardTitle>
          <CardDescription>Access your employee dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div><Label>Email</Label><Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading} /></div>
            <div><Label>Password</Label><Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} disabled={loading} /></div>
            <Button type="submit" className="w-full" disabled={loading}>{loading ? 'Signing in...' : 'Sign In'}</Button>
          </form>
          <Link to="/"><Button variant="ghost" className="w-full mt-4"><ArrowLeft className="h-4 w-4 mr-2" />Back</Button></Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmployeeLogin;
