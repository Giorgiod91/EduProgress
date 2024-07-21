import Link from "next/link";

export default function Success() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">Payment Successful!</h1>
      <p className="mt-4">
        Thank you for your purchase. You will now have access to the premium
        content.
      </p>
      <button>
        <Link href="/Users" className="btn btn-wide bg-primary text-white">
          Go to Members Area
        </Link>
      </button>
    </div>
  );
}
