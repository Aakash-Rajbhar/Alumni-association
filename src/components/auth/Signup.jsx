import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { EyeIcon, EyeOffIcon, FlagIcon } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Link, useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { auth, db } from '../../lib/firebase'; // Firebase file in lib folder
import GoogleIcon from '../../assets/googleIcon.svg'; // Import Google SVG icon
import { doc, setDoc, collection } from 'firebase/firestore';

export default function Signup() {
  const [togglePassword, setTogglePassword] = useState(true);
  const [toggleConfirmPassword, setToggleConfirmPassword] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [collegeId, setCollegeId] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (role === 'college') {
        // Save college data to Firestore
        await setDoc(doc(db, 'colleges', user.uid), {
          name: name,
          email: email,
          collegeName: collegeName,
          collegeId: collegeId,
        });
      } else {
        // Save user data to Firestore
        await setDoc(doc(db, 'users', user.uid), {
          name: name,
          email: email,
          collegeBatchYear: collegeId,
          role: role,
        });
      }

      navigate('/home');
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/home');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#f4f4f4]">
      <main className="flex-1">
        <section className="w-full py-12 flex justify-center md:py-24 lg:py-32">
          <div className="container">
            <div className="flex flex-col w-full items-center justify-center space-y-6">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Sign Up
                </h1>
                <p className="text-muted-foreground">
                  Join the ADGIPS Alumni Association
                </p>
              </div>
              <Card className="w-full max-w-md py-4">
                <CardContent className="grid gap-4">
                  {/* Role selection */}
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Select onValueChange={(value) => setRole(value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="college">College</SelectItem>
                        <SelectItem value="alumni">Alumni</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Conditional fields based on role */}
                  {role === 'college' ? (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="collegeName">College Name</Label>
                        <Input
                          id="collegeName"
                          type="text"
                          value={collegeName}
                          onChange={(e) => setCollegeName(e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="collegeId">College ID</Label>
                        <Input
                          id="collegeId"
                          type="text"
                          value={collegeId}
                          onChange={(e) => setCollegeId(e.target.value)}
                          required
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>

                      {/* College Batch Year input - Show only if role is 'student' or 'alumni' */}
                      {(role === 'student' || role === 'alumni') && (
                        <div className="space-y-2">
                          <Label htmlFor="collegeBatchYear">
                            College Batch Year
                          </Label>
                          <Input
                            id="collegeBatchYear"
                            type="number"
                            value={collegeId}
                            onChange={(e) => setCollegeId(e.target.value)}
                            required
                          />
                        </div>
                      )}
                    </>
                  )}

                  {/* Email input */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  {/* Password input */}
                  <div className="space-y-2 relative">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type={togglePassword ? 'password' : 'text'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute bottom-1 right-1 h-7 w-7"
                    >
                      {togglePassword ? (
                        <EyeOffIcon
                          onClick={() => setTogglePassword(!togglePassword)}
                          className="h-4 w-4"
                        />
                      ) : (
                        <EyeIcon
                          onClick={() => setTogglePassword(!togglePassword)}
                          className="h-4 w-4"
                        />
                      )}
                    </Button>
                  </div>

                  {/* Confirm password input */}
                  <div className="space-y-2 relative">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type={toggleConfirmPassword ? 'password' : 'text'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute bottom-1 right-1 h-7 w-7"
                    >
                      {toggleConfirmPassword ? (
                        <EyeOffIcon
                          onClick={() =>
                            setToggleConfirmPassword(!toggleConfirmPassword)
                          }
                          className="h-4 w-4"
                        />
                      ) : (
                        <EyeIcon
                          onClick={() =>
                            setToggleConfirmPassword(!toggleConfirmPassword)
                          }
                          className="h-4 w-4"
                        />
                      )}
                    </Button>
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col gap-2 pb-1">
                  <Button
                    onClick={handleSignup}
                    type="submit"
                    className="w-full bg-[#ff9f1c] text-white hover:bg-[#ffa426]"
                  >
                    Sign Up
                  </Button>
                  <div>---------------- or ---------------</div>
                  <div className="flex items-center justify-center mt-4">
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={handleGoogleSignup}
                    >
                      <img
                        src={GoogleIcon}
                        alt="Google"
                        className="mr-2 h-5 w-5"
                      />{' '}
                      Sign Up with Google
                    </Button>
                  </div>
                  <p className="text-muted-foreground">
                    Already have an account?{' '}
                    <Link to="/login" className="text-black hover:underline">
                      Login
                    </Link>
                  </p>
                </CardFooter>
              </Card>
              <div className="flex items-center gap-2">
                <div className="h-6 w-10 rounded-full bg-[#f93] flex items-center justify-center">
                  <FlagIcon className="h-4 w-4 text-white" />
                </div>
                <span className="text-muted-foreground">
                  Join the ADGIPS Alumni Association
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
