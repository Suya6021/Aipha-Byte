export default function RecStep1() {
  return (
    <main className="grid place-items-center min-h-screen">
      <div className="wrapper bg-white shadow-md rounded-md p-10 flex flex-col gap-8 w-[38%]">
        <div className="Header text-center text-black font-semibold text-2xl flex flex-col gap-1">
          <h3>Step-1</h3>
          <h1 className="text-sm font-medium">Verify Your Company</h1>
        </div>
        <div className="main-hero flex flex-col gap-4 p-6 items-center bg-[#f4f4f4] rounded-xl">
          <form className="flex flex-col p-2 gap-4 rounded-xl text-black bg-inherit w-full">
            <div className="text-lg font-semibold">
              <h1>Enter Company Details</h1>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold">Name</h3>
              <input type="text" className="px-4 py-1 rounded-md" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold">
                Business Registration Number
              </h3>
              <input type="text" className="px-4 py-1 rounded-md" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold">Email</h3>
              <input type="text" className="px-4 py-1 rounded-md" />
            </div>
          </form>
        </div>
        <div className="w-full rounded-md bg-black text-white text-center py-2 hover:cursor-pointer font-semibold">
          <button
          // onClick={() => {
          //   uploadPdf();
          //   router.push("applicant/step-2");
          // }}
          >
            Verify Details
          </button>
        </div>
      </div>
    </main>
  );
}
