import { useState } from 'react';
import './App.css';
import Colorful from './components/Colorful';
import UnFormatted from './components/UnFormatted';
import Distributed from './components/Distributed';
import Random from './components/Random';
function Input(props) {
  return <input autoComplete="off" {...props} />;
}
function App() {
  const [activeTab, setActiveTab] = useState('UnFormatted'); // default tab

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow rounded">
      {/* Tabs Header */}
      <div className="flex space-x-4 border-b mb-4">
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === 'UnFormatted' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'
          }`}
          onClick={() => setActiveTab('UnFormatted')}
        >
          UnFormatted
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === 'Colorful' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'
          }`}
          onClick={() => setActiveTab('Colorful')}
        >
          Colorful
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === 'Distributed' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'
          }`}
          onClick={() => setActiveTab('Distributed')}
        >
          Distributed
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === 'Random' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'
          }`}
          onClick={() => setActiveTab('Random')}
        >
          Random
        </button>
      </div>

      {/* Tabs Content */}
      <div>
        {activeTab === 'UnFormatted' && <UnFormatted />}
        {activeTab === 'Colorful' && <Colorful />}
        {activeTab === 'Distributed' && <Distributed />}
        {activeTab === 'Random' && <Random/>}
      </div>
    </div>
  );
}

export default App;
