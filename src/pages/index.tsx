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

const HomePage = (props: { title?: string }) => {
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

  const { title = " HOME " } = props;

  return (
    <>
      <Head>
        <title>{`Cryptech Services | ${title}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          id="meta-description"
          name="description"
          content="We provide web3 and fullstack development services and support, primarily focusing on cryptocurrency, blockchain technology, cyber security, web designing and technical support / consultation."
        />

        <meta
          property="og:description"
          content="We provide web3 and fullstack development services and support, primarily focusing on cryptocurrency , blockchain technology , cyber security , web designing and technical support / consultation."
        />
        <meta
          id="og:keywords"
          property="og:keywords"
          content="Full-Stack Web Development, Web3 And DAPP Development, Solidity Development, Web Design, Graphic Design, Technical Consultation"
        />

        <meta id="og-title" property="og:title" content="Cryptech.Services" />

        <meta
          property="og:url"
          id="og:url"
          content="https://cryptech.services"
        />

        <meta
          property="og:image"
          id="og:image"
          content="/static/images/ctlogo.png"
        />

        <meta id="og:type" property="og:type" content="website" />
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
};

export default HomePage;
