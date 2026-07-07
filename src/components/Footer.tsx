export default function Footer() {

  return (

    <footer className="bg-gray-950 border-t border-gray-800 px-6 py-8 text-center text-gray-400">

      <p>
        © {new Date().getFullYear()} Sachin M V. All rights reserved.
      </p>

      <p className="mt-2 text-sm">
        Data Science | Artificial Intelligence | Engineering
      </p>

    </footer>

  );

}