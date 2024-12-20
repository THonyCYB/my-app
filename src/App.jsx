import './App.css'

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <h1>Zeus</h1>      
        </div>
        <div className="navbar-center">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
      </nav>

      {/* Corpo principale */}
      <main>
        <section>
          <h2>Sezione principale</h2>
          <p>Questo è il contenuto del corpo principale dell`app.</p>          
        </section>
      </main>
      {/* Footer */}
      <footer>
        <p>&copy; 2024 My app</p>
      </footer>
    </div>
  );
}


export default App;
