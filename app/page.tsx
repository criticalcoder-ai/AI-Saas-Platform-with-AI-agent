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
              title = "recently completed sesions"
              companions = {recentSessions}
              classNames= ' w-2/3 max-lg:w-full'
            />
            <CTA />
        </section>
    </main>
  )
}

export default Page