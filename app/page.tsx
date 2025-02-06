import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA ";
import {recentSessions} from "@/constants";


const Page = async () => {
   
  return (
    <main>
      <h1>Popular Companions</h1>

        <section className="home-section">
           
                <CompanionCard
                 
                />
         

        </section>

        <section className="home-section">
            <CompanionsList
              
            />
            <CTA />
        </section>
    </main>
  )
}

export default Page