import { useState, createContext } from 'react';
import { aboutMeData } from '../data/aboutMeData';


const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
	const [aboutMe, setAboutMe] = useState(aboutMeData);

	const clientsHeading = clientsPageHeading;

	const [clientsData, setClientsData] = useState(clientsDataJson);

	return (
		<AboutMeContext.Provider
			value={{
				aboutMe,
				setAboutMe,
			}}
		>
			{children}
		</AboutMeContext.Provider>
	);
};

export default AboutMeContext;
