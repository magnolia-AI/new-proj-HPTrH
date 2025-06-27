'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function VideoTestPage() {
  const videoUrl = "https://storage.googleapis.com/magnolia-storage-dev-test-123/videos/2fpfxEwQCc/video.mp4";

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Video Playback Test</h1>
      <p className="mb-4">
        This page is designed to test video playback in isolation. If the video below plays correctly, the issue is likely related to styling or component conflicts on the main page.
      </p>
      
      <Card>
        <CardHeader>
          <CardTitle>Test Video</CardTitle>
        </CardHeader>
        <CardContent>
          <video
            controls
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-lg"
            style={{ maxHeight: '70vh' }}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </CardContent>
      </Card>
      
      <div className="mt-4 p-4 bg-secondary rounded-lg">
        <h3 className="font-semibold">Video Details:</h3>
        <p className="text-sm text-muted-foreground">
          <strong>Source URL:</strong> <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="underline">{videoUrl}</a>
        </p>
      </div>
    </div>
  );
}

