import Link from "next/link";
import Button from "../../button";

export function SignUp() {
  return (
    <section className="section bg-background-muted">
      <div className="px-3 container mx-auto">
        <div className="w-full sm:w-11/12  md:3/4 max-w-175 mx-auto p-8 sm:p-16 rounded-2xl text-2xl sm:text3xl md:text-4xl text-background-soft bg-[linear-gradient(135deg,#76656F_0%,rgba(118,101,111,0.05)_70%)]">
          <h2 className="text-center leading-13 font-medium mb-6">
            Ready to Transform
            <span className="md:block"> Your Workflow?</span>
          </h2>
          <div className="flex justify-center">
            <Button type="primary-fill" text="Sign up" size={3} to="/sign-up" />
          </div>
        </div>
      </div>
    </section>
  );
}
