import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, handleSumbit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        alert(`Message Sent`);
    };

    return (
        <section id="contact">
            <h2>Contact</h2>
            <form onSubmit={handleSumbit(onSubmit)}>
                <input {...register('name', {required: true})} placeholder="Name" />
                {errors.name && <p>Namie is required</p>}

                <input {...register('email', { required: true, pattern: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/ })} placeholder="Email" />
                {errors.email && <p>Invalid Email</p>}

                <textarea {...register('message', { required: true })} placeholder="Message" />
                {errors.message && <p>Message is required</p>}

                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default Contact;