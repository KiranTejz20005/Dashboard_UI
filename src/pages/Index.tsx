import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { MetricsGrid } from "@/components/dashboard/MetricsGrid";
import { BookingInsights } from "@/components/dashboard/BookingInsights";
import { TopArtistsBar } from "@/components/dashboard/TopArtistsBar";
import { TopArtistsPie } from "@/components/dashboard/TopArtistsPie";
import { NewBookingsFeed } from "@/components/dashboard/NewBookingsFeed";
import { UpcomingAppointments } from "@/components/dashboard/UpcomingAppointments";
import { InventoryTable } from "@/components/dashboard/InventoryTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-background w-full">
      <Sidebar />
      
      <div className="ml-20 w-[calc(100%-80px)]">
        <Header />
        
        <main className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Metrics & Charts (2 columns width) */}
            <div className="lg:col-span-2 space-y-6">
              <MetricsGrid />
              <BookingInsights />
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <TopArtistsBar />
                <TopArtistsPie />
              </div>
            </div>

            {/* Right Column - Feed & Tables (1 column width) */}
            <div className="lg:col-span-1 space-y-6">
              <NewBookingsFeed />
              <UpcomingAppointments />
              <InventoryTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
