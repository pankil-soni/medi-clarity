import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">MediClarity</h3>
            <p className="text-sm ">
              Helping you understand your medical documents with ease.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li>
                <Link className=" hover:text-gray-900" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className=" hover:text-gray-900" href="/upload">
                  Upload
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-sm ">support@mediclarity.com</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm ">
          © {new Date().getFullYear()} MediClarity. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
