"use client";

import React from 'react';
import { Twitter, Facebook, Linkedin, Link2, Share2 } from 'lucide-react';
import { toast } from 'sonner';

interface SocialShareProps {
  title?: string;
  url?: string;
}

export function SocialShare({ title = "Check your internet speed instantly!", url }: SocialShareProps) {
  const shareUrl = typeof window !== 'undefined' ? url || window.location.href : '';
  
  const shareLinks = [
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      color: 'bg-[#1DA1F2]',
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-5 h-5" />,
      color: 'bg-[#1877F2]',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      color: 'bg-[#0A66C2]',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className="flex flex-col gap-4 my-10 p-6 rounded-2xl bg-card border border-border/50 shadow-sm overflow-hidden relative group">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Share2 className="w-12 h-12" />
      </div>
      
      <div className="relative z-10">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          Help Others Test Their Speed
        </h3>
        <p className="text-sm text-muted-foreground mb-6">
          Found this tool useful? Share it with your friends and colleagues to help them optimize their connection.
        </p>

        <div className="flex flex-wrap gap-3">
          {shareLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-white font-medium transition-all hover:scale-105 active:scale-95 ${link.color}`}
            >
              {link.icon}
              <span className="text-sm">Share on {link.name}</span>
            </a>
          ))}
          
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-medium transition-all hover:scale-105 active:scale-95 border border-border"
          >
            <Link2 className="w-5 h-5" />
            <span className="text-sm">Copy Link</span>
          </button>
        </div>
      </div>
    </div>
  );
}
