export default function Footer() {
    return (
      <footer className="border-t border-gray-800 p-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Cryptography Visualized</p>
        </div>
      </footer>
    )
  }