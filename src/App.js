import UploadWidget from './components/UploadWidget';
import './App.css';

function App() {
  return (
    <main className="main">
      <div className="container">
        <h1 className="title">
          Accident Detection through cctv cameras
        </h1>
     </div>
     <div className="container">
      <UploadWidget />
     </div>
    </main>
  );
}

export default App;
