data = [
    {
        dipartment_name: "Cardiology",
        doctors: [' Dr. Anis', 'Dr. Arafat', 'Dr. Arman','Dr. Tofial Ahmed', 'Dr. Alaol', 'Dr. Rafiq Azad']
    },
    {
        dipartment_name: "Plastic & Aesthetic Surgery",
        doctors: ['Dr. Nasima Akhter','Dr. Maqsudul Alam', 'Dr. Anit Chakma', 'Dr. Abed Chaudhury' , 'Dr. Abul Hossion', 'Dr. Haji Shariatullah']
    },
    {
        dipartment_name: "Oncology",
        doctors: ['Dr. Maqsudul Alam','Dr. Lutful Aziz', 'Dr. Chanchal Kumar Devnath', 'Dr. Hasina Akhter', 'Dr. Anit Chakma', 'Dr. Abed Chaudhury']
    },
    {
        dipartment_name: "Urology",
        doctors: ['Dr. SM Fauque', 'Dr. Fafiqul Islam','Dr. Hiralal Sen', 'Dr. Ahmed Sofa', 'Dr. Zaunul Abedin', 'Dr. Jamulur Reza Choudhury']
    },
    {
        dipartment_name: "Gastroenterology",
        doctors: ['Dr. Hiralal Sen', 'Dr. Ahmed Sofa', 'Dr. Zaunul Abedin','Prof. Dr. M.A. Muqueet', 'Prof. Dr. Shamima Jahan', 'Dr. Tahmina Afrin Daisy']
    },
    {
        dipartment_name: "Nephrology",
        doctors: ['De. Tajkia Haque', 'Dr. Md. Obaidul Islam Sobuj', 'Dr. A.M. Ziaul Haque Masum', 'Dr. Tofial Ahmed', 'Dr. Alaol', 'Dr. Rafiq Azad']
    },
    {
        dipartment_name: "Gynecology",
        doctors: ['Dr. Md. Sahbub Alam','Dr. Maqsudul Alam', 'Dr. Anit Chakma', 'Dr. Abed Chaudhury', 'Dr. Hppy Haque', 'Dr. Lubna Khondker']
    },
    {
        dipartment_name: "MRD SERVICES",
        doctors: ['Prof. Dr. M.A. Muqueet', 'Prof. Dr. Shamima Jahan', 'Dr. Tahmina Afrin Daisy','Dr. Nasima Akhter','Dr. Maqsudul Alam', 'Dr. Anit Chakma']
    },
    {
        dipartment_name: "Dermatology",
        doctors: ['De. Tajkia Haque', 'Dr. Md. Obaidul Islam Sobuj','Dr. SM Fauque', 'Dr. Fafiqul Islam','Dr. Hiralal Sen', 'Dr. A.M. Ziaul Haque Masum']
    },
    {
        dipartment_name: "Diabetes",
        doctors: ['Dr. Md. Kamruzzaman', 'Prof. Dr. Jonaid Shafiq', 'Prof. Dr. Moinul Hossain' ,'Dr. SM Fauque', 'Dr. Fafiqul Islam','Dr. Hiralal Sen']
    },
    {
        dipartment_name: "Cardiac surgery",
        doctors: ['Dr. Lutful Aziz', 'Dr. Chanchal Kumar Devnath', 'Dr. Hasina Akhter','Dr. Hiralal Sen', 'Dr. Ahmed Sofa', 'Dr. Zaunul Abedin', 'Dr. Jamulur Reza Choudhury']
    },
]

dipartment_select = document.querySelector('#dipartment_select')
doctor_select = document.querySelector('#doctor_select')
renderDipartment = () => {
    dipartment_select.innerHTML = ''

    data.forEach(item => {
        console.log(item.dipartment_name);
        let new_el = document.createElement('option')
        new_el.value = item.dipartment_name
        new_el.innerHTML = `${item.dipartment_name}`
        dipartment_select.appendChild(new_el)
        // <option ng-value="10" value="number:10" aria-checked="true">General &amp;Laparoscopic Surgery</option>
    });            
}

dipartmentChange = () => {
    // <option ng-value="10" value="number:10" aria-checked="true">General &amp;Laparoscopic Surgery</option>
    console.log(dipartment_select.value);

    doctors = null
    data.forEach(item => {
        if(item.dipartment_name === dipartment_select.value) {
            doctors = item.doctors
        }
    });
    if(doctors) {
        doctor_select.innerHTML = ''

        doctors.forEach(item => {
            console.log(item);
            let new_el = document.createElement('option')
            new_el.value = item
            new_el.innerHTML = `${item}`
            doctor_select.appendChild(new_el)
            // <option ng-value="10" value="number:10" aria-checked="true">General &amp;Laparoscopic Surgery</option>
        }); 
    }
}

renderDipartment()
dipartmentChange()