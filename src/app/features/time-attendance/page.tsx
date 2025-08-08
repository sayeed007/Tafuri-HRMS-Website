import AttendanceManagementSection from "@/components/features/time-attendance/AttendanceManagementSection";
import FeaturesGrid from "@/components/features/time-attendance/FeaturesGrid";
import HeroSection from "@/components/features/time-attendance/HeroSection";
import ScheduleManagementSection from "@/components/features/time-attendance/ScheduleManagementSection";
import SmartAttendanceSection from "@/components/features/time-attendance/SmartAttendanceSection";


export default function TimeAttendancePage() {
    return (
        <div className="bg-body">
            <HeroSection />
            <FeaturesGrid />
            <SmartAttendanceSection />
            <ScheduleManagementSection />
            <AttendanceManagementSection />
        </div>
    )
}