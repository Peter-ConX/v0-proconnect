"use client"

import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function SplashScreen() {
  const router = useRouter()
  const [showVideo, setShowVideo] = useState(false)
  const [showSplash, setShowSplash] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Start playing audio immediately
    if (audioRef.current) {
      audioRef.current.play().catch((err) => console.error("Error playing audio:", err))
    }

    // Show image for 2 seconds, then switch to video
    const videoTimer = setTimeout(() => {
      setShowVideo(true)
      // Start playing the video when it's shown
      if (videoRef.current) {
        videoRef.current.play().catch((err) => console.error("Error playing video:", err))
      }
    }, 2000)

    // Hide splash screen and redirect after 8 seconds total
    const redirectTimer = setTimeout(() => {
      setShowSplash(false)
      router.push("/home")
    }, 8000)

    return () => {
      clearTimeout(videoTimer)
      clearTimeout(redirectTimer)

      // Stop audio and video when component unmounts
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }

      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
    }
  }, [router])

  // If splash is done, don't render anything
  if (!showSplash) return null

  return (
    <div className="fixed inset-0 z-50 bg-navy">
      {/* Audio element */}
      <audio ref={audioRef} src="/audio/intro-sound.mp3" className="hidden" />

      {!showVideo ? (
        // Full screen image for first 2 seconds
        <div className="relative w-full h-full">
          <Image src="/images/proconnect-logo.png" alt="Proconnect" fill className="object-contain" priority />
        </div>
      ) : (
        // Full screen video after 2 seconds
        <div className="w-full h-full">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src="/videos/proconnect-intro.mp4"
            muted={false}
            playsInline
            autoPlay
          />
        </div>
      )}
    </div>
  )
}
