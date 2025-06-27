import React from 'react';

const VideoTestPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Video Test Page</h1>
      <div className="w-full max-w-4xl mx-auto">
        <video
          controls
          className="w-full"
          src="https://storage.googleapis.com/magnolia-storage-dev-test-123/videos/2fpfxEwQCc/video.mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoTestPage;

