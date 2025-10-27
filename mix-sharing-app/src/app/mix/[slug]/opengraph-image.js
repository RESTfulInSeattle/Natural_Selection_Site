import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { slug } = params;

  // Generate the Open Graph image based on the mix slug
  const imageUrl = `https://example.com/opengraph-images/${slug}.png`; // Replace with actual image generation logic

  const response = NextResponse.json({
    title: `Check out this mix: ${slug}`,
    description: `Listen to the amazing mix titled "${slug}"!`,
    image: imageUrl,
    url: `https://example.com/mix/${slug}`, // Replace with your actual URL structure
  });

  response.headers.set('Content-Type', 'application/json');
  return response;
}