import { RoughNotation } from 'react-rough-notation';
import { useInView } from '../../../../hooks/useIntersectionObserver';
import { useRef } from 'react';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email').min(1, 'Email is required'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have more than 8 characters')
});

type FormSchemaType = z.infer<typeof formSchema>;

export default function CTA() {
  const CTATextRef = useRef(null);

  const observedElements = useInView([CTATextRef]);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log('API Response:', responseData);

      toast.success('Form submitted successfully!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      });
    } catch (error) {
      console.error('Error:', error);
      toast.error(
        'There was an error submitting the form. Please try again later.',
        {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored'
        }
      );
    }
  };

  return (
    <section
      id="CTA Section"
      className="my-20 flex items-center justify-center"
    >
      <div className="w-full max-w-7xl space-y-14">
        <div className="bg-gray-100 py-10 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2
                ref={CTATextRef}
                data-myproperty="CTAText"
                className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl"
              >
                What are you waiting for? Join us
                <RoughNotation
                  color="var(--brand-orange-primary)"
                  type="circle"
                  padding={1}
                  strokeWidth={2}
                  show={observedElements?.CTAText?.isInView}
                >
                  {' now.'}
                </RoughNotation>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-600">
                Discover the limitless possibilities that await you. Are you
                ready to embark on a journey towards success? Enter your details
                below and let's get started:
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mx-auto mt-12 max-w-xl"
            >
              <div className="flex flex-col items-center gap-6 sm:justify-center">
                <div className="w-full min-w-0 flex-1 px-4 sm:px-0">
                  <label htmlFor="name" className="sr-only"></label>
                  <input
                    {...register('name', { required: true })}
                    placeholder="Enter your name"
                    className="block w-full rounded-md border-transparent p-4 text-base text-black caret-indigo-600 transition-all duration-200 placeholder:text-gray-500 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                  />
                  {errors.name && (
                    <span className="text-red-600">{errors.name.message}</span>
                  )}
                </div>
                <div className="w-full min-w-0 flex-1 px-4 sm:px-0">
                  <label htmlFor="email" className="sr-only"></label>
                  <input
                    {...register('email', { required: true })}
                    placeholder="Enter your email"
                    className="block w-full rounded-md border-transparent p-4 text-base text-black caret-indigo-600 transition-all duration-200 placeholder:text-gray-500 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                  />
                  {errors.email && (
                    <span className="text-red-600">{errors.email.message}</span>
                  )}
                </div>
                <div className="w-full min-w-0 flex-1 px-4 sm:px-0">
                  <label htmlFor="password" className="sr-only"></label>
                  <input
                    {...register('password', { required: true })}
                    placeholder="Enter your password"
                    className="block w-full rounded-md border-transparent p-4 text-base text-black caret-indigo-600 transition-all duration-200 placeholder:text-gray-500 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                  />
                  {errors.password && (
                    <span className="text-red-600">
                      {errors.password.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="mt-4 inline-flex w-auto items-center justify-center rounded-md border border-transparent bg-indigo-600 p-4 font-semibold text-white transition-all duration-200 hover:bg-indigo-700 focus:bg-indigo-700 disabled:bg-gray-200 sm:ml-4 sm:mt-0 sm:w-auto"
                  disabled={isSubmitting}
                >
                  Get in touch
                  <svg
                    className="-mr-1 ml-3 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </form>

            <div className="mt-8 flex items-center justify-center px-8 sm:px-0">
              <svg
                className="h-5 w-5 shrink-0 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span className="ml-2 text-sm text-gray-600">
                {' '}
                Your data is complely secured with us. We don't share with
                anyone.{' '}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
