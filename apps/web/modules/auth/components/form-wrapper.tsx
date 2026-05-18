interface FormWrapperProps {
  children: React.ReactNode;
}

export const FormWrapper = ({ children }: FormWrapperProps) => {
  return (
    <div className="w-full max-w-sm border-none bg-white p-5 text-slate-900 shadow-none sm:rounded-lg sm:border sm:shadow-md">
      <div className="mb-4 flex flex-col gap-2">
        <h3 className="text-xl font-semibold leading-none tracking-tight">Welcome home, arcaber.</h3>
        <p className="text-sm font-normal text-slate-500">
          By continuing, you accept{" "}
          <span className="cursor-pointer underline">arcab Data, Privacy and Safety policies</span> for all{" "}
          <span className="cursor-pointer underline">arcab Products and Services.</span>
        </p>
      </div>
      {children}
    </div>
  );
};
