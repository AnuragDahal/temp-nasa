"use client"


const page = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/");
      }}
    >
      UseRouter
    </button>
  );
};
export default page;
