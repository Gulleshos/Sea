import { TabletIcon } from "../../../public/icons";
import dateFormatter from "@/lib/dateFormatter";

const TableRowStyles =
    "text-left px-1 sm:px-2 py-2 sm:py-3 pr-3 text-sm sm:text-base";

export default function TableRow({ data, type, onClick, doctorId }) {
    const renderColumns = () => {
        switch (type) {
            case "doctors":
                return (
                    <>
                        <td className={TableRowStyles}>{data.doctorId}</td>
                        <td className={TableRowStyles}>{data.firstName}</td>
                        <td className={TableRowStyles}>{data.lastName}</td>
                        <td className={TableRowStyles}>{data.post}</td>
                        <td className={TableRowStyles}>{data.email}</td>
                        <td className={TableRowStyles}>{data.phone}</td>
                    </>
                );
            case "patients":
                return (
                    <>
                        <td className={TableRowStyles}>{data.patientId}</td>
                        <td className={TableRowStyles}>{data.firstName}</td>
                        <td className={TableRowStyles}>{data.lastName}</td>
                        <td className={TableRowStyles}>{data.email}</td>
                        <td className={TableRowStyles}>{data.phone}</td>
                    </>
                );
            case "patientsOfDoctor":
                return (
                    <>
                        <td className={TableRowStyles}>{data.patientId}</td>
                        <td className={TableRowStyles}>{data.firstName}</td>
                        <td className={TableRowStyles}>{data.lastName}</td>
                        <td className={TableRowStyles}>
                            {data.appointments.filter(appointment => appointment.doctorId === doctorId).length}
                        </td>
                    </>
                );
            case "appointmentsOfDoctor":
                return (
                    <>
                        <td className={TableRowStyles}>{data.appointmentId}</td>
                        <td className={TableRowStyles}>
                            {dateFormatter(data.date)}
                        </td>
                        <td className={TableRowStyles}>{data.time}</td>
                        <td className={TableRowStyles}>
                            {data.patient.patientName}
                        </td>
                        <td className={TableRowStyles}>{data.status}</td>
                    </>
                );
            case "appointmentsOfPatient":
                return (
                    <>
                        <td className={TableRowStyles}>{data.appointmentId}</td>
                        <td className={TableRowStyles}>
                            {dateFormatter(data.date)}
                        </td>
                        <td className={TableRowStyles}>{data.time}</td>
                        <td className={TableRowStyles}>
                            {data.doctor.doctorName}
                        </td>
                        <td className={TableRowStyles}>{data.status}</td>
                    </>
                );
            case "prescriptionsOfPatient":
                return (
                    <>
                        <td className={TableRowStyles}>
                            {data.doctor.doctorName}
                        </td>
                        <td className={TableRowStyles}>
                            {data.prescription.name || "none"}
                        </td>
                        <td className={TableRowStyles}>
                            {dateFormatter(data.date)}
                        </td>
                        <td className={TableRowStyles}>
                            {data.prescription.duration === null
                                ? "none"
                                : data.prescription.duration > 1
                                ? `${data.prescription.duration} weeks`
                                : `${data.prescription.duration} week`}
                        </td>
                    </>
                );
            case "upcomingAppointment":
                return (
                    <>
                        <td className={TableRowStyles} scope="col">
                            {data.appointmentId}
                        </td>
                        <td className={TableRowStyles} scope="col">
                            {dateFormatter(data.date)}
                        </td>
                        <td className={TableRowStyles} scope="col">
                            {data.time}
                        </td>
                        <td className={TableRowStyles} scope="col">
                            {data.patient.patientName}
                        </td>
                        <td className={TableRowStyles} scope="col">
                            {data.doctor.doctorName}
                        </td>
                    </>
                );
        }
    };
    return (
        <tr className="bg-white border-b border-lightGray hover:bg-lightGray">
            {renderColumns()}
            <td className="py-2 sm:py-3 text-sm lg:text-base" scope="col">
                <button
                    className="transition-colors duration-300"
                    onClick={onClick}
                >
                    <TabletIcon className="h-6 stroke-primary hover:stroke-secondary stroke-2" />
                </button>
            </td>
        </tr>
    );
}
