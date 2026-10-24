"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const DEFAULT_VIDEOS = [
  "/assets/video/vendmart-intro.mp4",
];

function VendmartWord() {
  return (
    <span className="inline-flex items-baseline tracking-normal font-black whitespace-nowrap">
      <span className="text-[#E51920] drop-shadow-[0_2px_14px_rgba(229,25,32,0.7)]">V</span>
      <span className="text-[#00A651] drop-shadow-[0_2px_14px_rgba(0,166,81,0.7)]">E</span>
      <span className="text-[#0072CE] drop-shadow-[0_2px_14px_rgba(0,114,206,0.7)]">N</span>
      <span className="text-[#FDB813] drop-shadow-[0_2px_14px_rgba(253,184,19,0.7)]">D</span>
      <span className="text-white drop-shadow-[0_2px_14px_rgba(255,255,255,0.4)]">M</span>
      <span className="text-white drop-shadow-[0_2px_14px_rgba(255,255,255,0.4)]">A</span>
      <span className="text-white drop-shadow-[0_2px_14px_rgba(255,255,255,0.4)]">R</span>
      <span className="text-white drop-shadow-[0_2px_14px_rgba(255,255,255,0.4)]">T</span>
    </span>
  );
}

export default function IntroScreen() {
  const { lang } = useLanguage();
  const [show, setShow] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [videoList, setVideoList] = useState<string[]>(DEFAULT_VIDEOS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Kunci scroll saat intro tampil & ambil daftar video dari folder public/assets/video
  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Pastikan video langsung play saat pertama kali render
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }

    // Ambil daftar video dinamis dari folder public/assets/video
    fetch("/api/videos")
      .then((res) => res.json())
      .then((data) => {
        if (data?.videos && Array.isArray(data.videos) && data.videos.length > 0) {
          setVideoList(data.videos);
        }
      })
      .catch(() => {
        // Fallback default
      });

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Update src video dan putar saat index video berubah
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [currentIndex, videoList, isMuted]);

  const handleStart = () => {
    setExiting(true);
    setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 900);
  };

  const toggleSound = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  // Otomatis pindah ke video berikutnya saat video selesai
  const handleVideoEnded = () => {
    if (videoList.length > 1) {
      setCurrentIndex((prev) => (prev + 1) % videoList.length);
    } else if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  if (!show) return null;

  const currentVideoSrc = videoList[currentIndex] || DEFAULT_VIDEOS[0];

  const labels = {
    id: {
      tag: "SMART VENDING SOLUTIONS",
      titleMain: "Masa Depan Retail ",
      titlePrefix: "Dimulai Bersama ",
      sub: "Hadirkan pengalaman belanja yang lebih praktis, cerdas, dan modern melalui solusi vending machine serta kemitraan bisnis yang fleksibel di seluruh Indonesia.",
      startBtn: "Selengkapnya",
      skip: "Lewati Video",
      audioMute: "Bisukan Suara",
      audioUnmute: "Aktifkan Suara",
      videoCount: `Video ${currentIndex + 1} dari ${videoList.length}`,
    },

    en: {
      tag: "SMART VENDING SOLUTIONS",
      titleMain: "The Future of Retail, ",
      titlePrefix: "Powered by ",
      sub: "Redefining convenience through smart vending technology, seamless retail experiences, and flexible business partnerships across Indonesia.",
      startBtn: "Explore Our Solutions",
      skip: "Skip Video",
      audioMute: "Mute Sound",
      audioUnmute: "Enable Sound",
      videoCount: `Video ${currentIndex + 1} of ${videoList.length}`,
    },

    zh: {
      tag: "智能自动售货解决方案",
      titleMain: "开启智慧零售新未来，",
      titlePrefix: "尽在 ",
      sub: "通过智能自动售货技术、便捷的购物体验和灵活的商业合作模式，重新定义零售体验，覆盖印度尼西亚各地。",
      startBtn: "探索我们的解决方案",
      skip: "跳过视频",
      audioMute: "关闭声音",
      audioUnmute: "开启声音",
      videoCount: `视频 ${currentIndex + 1} / ${videoList.length}`,
    },
  };

  const fallbackLabels = {
    tag: "SMART VENDING SOLUTIONS",
    titleMain: "Masa Depan Retail ",
    titlePrefix: "Dimulai Bersama ",
    sub: "Hadirkan pengalaman belanja yang lebih praktis, cerdas, dan modern melalui solusi vending machine serta kemitraan bisnis yang fleksibel di seluruh Indonesia.",
    startBtn: "Selengkapnya",
    skip: "Lewati Video",
    audioMute: "Bisukan Suara",
    audioUnmute: "Aktifkan Suara",
    videoCount: `Video ${currentIndex + 1} dari ${videoList.length}`,
  };

  const currentLabels = labels[lang] || fallbackLabels;

  return (
    <aside
      aria-label="Welcome Screen"
      className={`fixed inset-0 z-[100] flex flex-col justify-between overflow-hidden bg-black text-white transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] select-none ${
        exiting ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* 1. CINEMATIC FULLSCREEN VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          playsInline
          loop={videoList.length <= 1}
          preload="auto"
          onPlaying={() => setIsVideoReady(true)}
          onError={() => setIsVideoReady(true)}
          onEnded={handleVideoEnded}
          key={currentVideoSrc}
          className={`h-full w-full object-cover object-center filter brightness-90 transition-opacity duration-700 ${
            isVideoReady ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={currentVideoSrc} type="video/mp4" />
        </video>

        {/* Cinematic Vignette & Shadow Overlays for Crisp Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/75" />
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(circle at center, transparent 35%, rgba(0, 0, 0, 0.85) 100%)",
          }}
        />
      </div>

      {/* 2. TOP MINIMALIST BAR */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-12 sm:py-8">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/Vendmart Logo.png"
            alt="VendMart"
            width={240}
            height={60}
            priority
            className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
          />
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          {/* Audio Button */}
          <button
            type="button"
            onClick={toggleSound}
            title={isMuted ? currentLabels.audioUnmute : currentLabels.audioMute}
            className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:border-orange hover:bg-orange/20 cursor-pointer"
          >
            {isMuted ? (
              <svg className="h-4 w-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            ) : (
              <svg className="h-4 w-4 text-orange animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            )}
          </button>

          {/* Quick Skip Button */}
          <button
            type="button"
            onClick={handleStart}
            className="rounded-full border border-white/15 bg-black/35 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/70 backdrop-blur-md transition-all hover:border-white/40 hover:text-white cursor-pointer"
          >
            {currentLabels.skip}
          </button>
        </div>
      </header>

      {/* 3. CENTER & HERO EDITORIAL CONTENT */}
      <main className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center">
        {/* Subtle Category Line */}
        <div className="mb-4 sm:mb-6 flex items-center gap-3">
          <span className="h-px w-8 bg-orange" />
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-orange drop-shadow-sm">
            {currentLabels.tag}
          </span>
          <span className="h-px w-8 bg-orange" />
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] leading-[1.15]">
          <span>{currentLabels.titleMain}</span>
          <span className="text-white/95">{currentLabels.titlePrefix}</span>
          <VendmartWord />
          <span className="text-orange">.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg text-white/85 font-normal leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          {currentLabels.sub}
        </p>

        {/* PRIMARY "START" CTA BUTTON: Posisi agak bawahan & ukuran lebih ramping/compact */}
        <div className="mt-12 sm:mt-16 md:mt-20 flex flex-col items-center gap-3">
          <button
            id="startExperienceBtn"
            type="button"
            onClick={handleStart}
            className="group relative inline-flex items-center gap-3 rounded-full bg-orange px-6 py-2.5 sm:px-7 sm:py-3 font-bold tracking-wider text-white shadow-[0_0_25px_rgba(255,177,33,0.4)] transition-all duration-300 hover:scale-105 hover:bg-orange-dark hover:shadow-[0_0_40px_rgba(255,177,33,0.65)] active:scale-95 cursor-pointer"
          >
            <span className="text-xs sm:text-sm uppercase tracking-[0.16em]">
              {currentLabels.startBtn}
            </span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/25 text-white transition-transform duration-300 group-hover:translate-x-1">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>

          {/* Multiple Video Playlist Dots (jika terdapat lebih dari 1 video di folder) */}
          {videoList.length > 1 && (
            <div className="flex items-center gap-2 pt-1">
              {videoList.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  title={`Putar video ke-${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx ? "w-6 bg-orange" : "w-1.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* 4. BOTTOM STATUS BAR */}
      <footer className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-12 sm:py-8 text-[11px] sm:text-xs text-white/50 tracking-wider">
        <div>VENDMART SMART VENDING INDONESIA</div>
        <div className="flex items-center gap-3">
          {videoList.length > 1 && (
            <span className="text-white/70 font-medium">{currentLabels.videoCount}</span>
          )}
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-orange animate-ping" />
            <span>CINEMATIC SHOWCASE</span>
          </span>
        </div>
      </footer>
    </aside>
  );
}
