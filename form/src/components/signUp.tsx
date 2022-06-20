import { Button, Form, Input } from 'antd';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { addUser } from '../features/userSlice';

interface userData{
    username: string
    email: string;
    password: string;
    address: string;
}

const Signup: React.FC = () => {
    const details = useSelector((state:RootState) => state.user.value);
    const dispatch = useDispatch();
    const{handleSubmit, control, formState: {errors}, setValue} = useForm<userData>()

    const onSubmit:SubmitHandler<userData> = (data) =>{
        dispatch(addUser(data));
        setValue("address", '');
        setValue("email", '');
        setValue("password", '');
        setValue("username", '');
    } 
    console.log(details);

    return (
        <div className='flex justify-center h-screen items-center'>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                className='border-2 border-blue-300 pt-4 px-6 rounded-lg'
                onFinish={handleSubmit(onSubmit)}
            >
                <h1 className='text-center pb-5 text-xl font-semibold'>Sign Up</h1>
                <Controller 
                    control={control}
                    name="username"
                    rules={{required: true}}
                    render={({field: {value, onChange}}) => (
                        <Form.Item
                        label="Username"
                        >
                        <Input className='rounded-full' value={value} onChange={onChange} placeholder='Enter your username' />
                        </Form.Item>
                    )}
                />
                <div className='h-5 mb-2'>
                    <p className='w-full -mt-5 ml-[35%] mb-3 text-red-400  font-semibold rounded-sm'>{errors.username && errors.username.type === "required" && "Username is required"}</p>
                </div>
                <Controller 
                    control={control}
                    name="email"
                    rules={{required:true}}
                    render={({field: {value, onChange}}) => (
                        <Form.Item
                        label="Email"
                        >
                        <Input type={"email"} className='rounded-full' value={value} onChange={onChange} placeholder='enter your email' />
                        </Form.Item>
                    )}
                />
                <div className='h-5 mb-2'>
                    <p className='w-full -mt-5 ml-[35%] mb-3 text-red-400  font-semibold rounded-sm'>{errors.email && "Email is required"}</p>
                </div>
                <Controller 
                    control={control}
                    name="password"
                    rules={{required: true, minLength:6}}
                    render={({field: {value, onChange}}) => (
                        <Form.Item
                        label="Password"
                        >
                        <Input.Password className='rounded-full' value={value} onChange={onChange} placeholder='enter your username' />
                        </Form.Item>
                    )}
                />
                <div className='h-5 mb-2'>
                    <p className='w-full -mt-5 ml-[35%] mb-3 text-red-400  font-semibold rounded-sm'>{errors.password && errors.password.type === "required" && "Password is required"}</p>
                    <p className='w-full -mt-5 ml-[15%] mb-8 text-red-400  font-semibold rounded-sm'>{errors.password && errors.password.type === "minLength" && "Password must be atleast 6 letters"}</p>
                </div>
                <Controller 
                    control={control}
                    name="address"
                    rules={{required: true, minLength:6}}
                    render={({field: {value, onChange}}) => (
                        <Form.Item
                        label="Address"
                        >
                        <Input className='rounded-full' value={value} onChange={onChange} placeholder='enter your address' />
                        </Form.Item>
                    )}
                />
                <div className='h-5 mb-2'>
                    <p className='w-full -mt-5 ml-[35%] mb-3 text-red-400  font-semibold rounded-sm'>{errors.address && errors.address.type === "required" && "Password is required"}</p>
                </div>

                <Form.Item wrapperCol={{offset: 1}}>
                    <Button type="primary" htmlType="submit" className='border-2 w-full border-slate-200 bg-blue-500 text-slate-100 rounded-lg'>
                        SignUp
                    </Button> 
                </Form.Item>
            </Form>
        </div>
    );
};

export default Signup;