import { useForm } from 'react-hook-form';

interface ContactFormInputs {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>();

  const onSubmit = (data: ContactFormInputs) => {
    alert('Message Sent: ' + JSON.stringify(data));
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name', { required: true })} placeholder="Name" />
        {errors.name && <p>Name is required</p>}

        <input
          {...register('email', { required: true, pattern: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/ })}
          placeholder="Email"
        />
        {errors.email && <p>Invalid email</p>}

        <textarea {...register('message', { required: true })} placeholder="Message" />
        {errors.message && <p>Message is required</p>}

        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
