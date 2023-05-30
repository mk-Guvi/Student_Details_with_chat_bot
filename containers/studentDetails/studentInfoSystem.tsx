import dynamic from 'next/dynamic';
import Link from 'next/link';

const DynamicChatHome = dynamic(() => import('./chatBot/chatHome'), { ssr: false });
export const StudentInfoSystem = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <header className="w-full border-b h-12 flex items-center px-4 ">
        <h1 className="flex-1 font-medium">Student Info System</h1>
        <Link href={'/'} className="p-1.5 rounded text-xs font-medium hover:bg-gray-100 px-3">
          Back
        </Link>
      </header>
      <section className="p-3 px-4 w-full flex justify-center items-center h-[90%] ">
        <DynamicChatHome />
      </section>
    </div>
  );
};
