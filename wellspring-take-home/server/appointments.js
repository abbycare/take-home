const appointments = [
    {
      id: 1,
      time: "10:00 AM",
      appointmentType: "Telehealth",
      patientName: "John Smith",
      appointmentName: "PAT",
      appointmentDate: new Date().toLocaleDateString(),
      appointmentDescription: "Annual checkup"
    },
    {
      id: 2,
      time: "4:00 PM",
      appointmentType: "Telehealth",
      patientName: "George Mason",
      appointmentName: "PAT",
      appointmentDate: new Date().toLocaleDateString(),
      appointmentDescription: "Annual checkup"
    },
    {
      id: 3,
      time: "2:00 PM",
      appointmentType: "Telehealth",
      patientName: "Robert Johnson",
      appointmentName: "PAT",
      appointmentDate: new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleDateString(),
      appointmentDescription: "Discuss treatment options"
    },
    {
      id: 4,
      time: "11:00 AM",
      appointmentType: "In-person",
      patientName: "Mary Smith",
      appointmentName: "Delegation",
      appointmentDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString(),
      appointmentDescription: "Annual checkup"
    }
  ];

  module.exports = appointments;