import React, { useEffect, useState } from "react";
import { DefaultHead } from "@/components/layout/Head";
import HeroSection from "@/components/layout/HeroSection";
import HomeStats from "@/components/layout/HomeStats";
import HomeProducts from "@/components/layout/HomeProducts";
import HomeFAQ from "@/components/layout/HomeFAQ";
import HomeSubscribe from "@/components/layout/HomeSubscribe";
import GitFeedsSection from "@/components/layout/GitFeedsSection";
import HomeProjects from "@/components/layout/HomeProjects";
import Wrapper from "@/components/layout/Wrapper";
import supabase from "@/lib/supabase";

const HomePage = () => {
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
      <DefaultHead />
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
