import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import HeroSection from "@/components/layout/HeroSection";
import HomeStats from "@/components/layout/HomeStats";
import HomeProducts from "@/components/layout/HomeProducts";
import HomeFAQ from "@/components/layout/HomeFAQ";
import HomeSubscribe from "@/components/layout/HomeSubscribe";
import GitFeedsSection from "@/components/layout/GitFeedsSection";
import HomeProjects from "@/components/layout/HomeProjects";
import Wrapper from "@/components/layout/Wrapper";
import supabase from "@/lib/supabase";

interface PageProps {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

export default function Home({ title, description, imageUrl, url }: PageProps) {
  const [stats, setStats] = useState({
    projects_completed: 0,
    happy_clients: 0,
    team_members: 0,
    game_servers: 0,
  });

  useEffect(() => {
    // Fetch data from Supabase
    const fetchStats = async () => {
      const { data, error } = await supabase
        .from("ztable_ctstats")
        .select("*")
        .single(); // Use .single() to get only one row, assuming the stats are in one row

      if (error) {
        console.error("Error fetching data from Supabase:", error);
      } else {
        setStats(data); // Set the fetched data to the state
      }
    };

    fetchStats();
  }, []);

  return (
    <>
      <Head>
        <title>{`Cryptech Services`}</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Dynamic Open Graph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />

        {/* Dynamic Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
      </Head>

      <Wrapper>
        <HeroSection />
        <HomeStats
          projectsCompleted={stats.projects_completed}
          happyClients={stats.happy_clients}
          teamMembers={stats.team_members}
          gameServers={stats.game_servers}
        />
        <HomeProducts />
        <HomeProjects />
        <GitFeedsSection />
        <HomeFAQ />
        <HomeSubscribe />
      </Wrapper>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch metadata dynamically here (e.g., from a database or an API)
  const metadata = {
    title: "Cryptech.Services",
    description:
      "We provide web3 and fullstack development services and support, primarily focusing on cryptocurrency , blockchain technology , cyber security , web designing and technical support / consultation.",
    imageUrl: "/static/images/ctlogo.png",
    url: "https://cryptech.services",
  };

  return {
    props: metadata,
  };
};
