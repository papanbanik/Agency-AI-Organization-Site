import assets from '../assets/assets'; 
import toast from 'react-hot-toast';

const Teams = () => {

 const onSubmit=async(event)=>{
      
      event.preventDefault();
      const formData=new FormData(event.target)
      formData.append("access_key","948df1af-67c8-4eda-9e5a-cdcffe1c0ec2");
      
      try
      {
        const response=await fetch("https://api.web3forms.com/submit",{
         method: "POST",
         body: formData
       });
       const data = await response.json();

       if (data.success) 
        {
        toast.success('Thank you for submission')
        event.target.reset();
         }
       else 
        {
       toast.error(data.message)
        }
     } 

    catch(error)
            {
               toast.error(error.message)
            }
     };
    
    return (
    <div id="contact" className="flex flex-col items-center gap-10 px-4 pt-20">
    <div className="flex flex-col items-center text-center gap-2 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white"> Reach out to us
      </h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-xl">
        Ready to grow your brand? Let's connect and build something<br/> exceptinal together</p>
    </div>
    
   <form onSubmit={onSubmit} className='grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-2 gap-3'> 
    <div>
        <p className='mb-2 font-semibold'>Your Name</p>
        <div className='flex items-center rounded border p-2 '>
            <img src={assets.person_icon} alt='person icoon'/>
            <input type='text'
               name='name'
             placeholder='Enter your name' 
             required
             className='w-full  pl-3 outline-none' />
        </div>
    </div>
     
    
       <div>     
        <p className='mb-2 font-semibold'>Your Email</p>
        <div className='flex rounded border p-2 '>
            <img src={assets.email_icon}   alt='email icon'/>
            <input type='email' 
              name='email'
              placeholder='Enter your Email'
              required
              className=' pl-3 outline-none w-full ' />
        </div> 
        </div>

        <div className='lg:col-span-2 '>
        <p className='mb-2 font-semibold'>Message</p>
        <div className=' rounded border p-2 '>
            <textarea type='text' 
              name='message'
             rows={6}
             placeholder='Enter your message' 
             required
            className='w-full pl-3 outline-none' />
        </div>
         </div>
         
         <button type='submit'
         className='w-max flex justify-center gap-2 bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-900'>Submit<img src={assets.arrow_icon} className='w-4'/></button>
          </form>
   </div>
    
    );
};

export default Teams;