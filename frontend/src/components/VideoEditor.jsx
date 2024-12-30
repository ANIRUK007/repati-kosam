import React from 'react';
import { useParams } from 'react-router-dom';

const VideoEditor = () => {
  const { projectId } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Project Editor</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md">
          Save Changes
        </button>
      </div>
      
      <div className="grid grid-cols-12 gap-6">
        {/* Video Preview */}
        <div className="col-span-8 bg-black aspect-video rounded-lg">
          <div className="w-full h-full flex items-center justify-center text-white">
            Video Preview Area
          </div>
        </div>
        
        {/* Timeline */}
        <div className="col-span-4 bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Timeline</h3>
          <div className="space-y-2">
            <div className="bg-gray-100 p-2 rounded">Clip 1</div>
            <div className="bg-gray-100 p-2 rounded">Clip 2</div>
            <div className="bg-gray-100 p-2 rounded">Clip 3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoEditor;