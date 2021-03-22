import Card from "../card/Card";
import './List.css';

function List() {
    const leadersList = [
        {
            name:'Narendra Modi',
            title:'Indian Prime Minister',
            image:'/modi.jpeg',
            description: 'Narendra Damodardas Modi is an Indian politician serving as the 14th and current Prime Minister of India since 2014. He was the Chief Minister of Gujarat from 2001 to 2014 and is the Member of Parliament for Varanasi. He is the only non-Congress prime minister to have won two consecutive majorities in Lok Sabha elections. In the six years as prime minister, Narendra Modi is credited to have introduced some long-awaited reforms in the country. However, with four years still remaining in his second term, his government faces a plethora of challenges as well. Born and raised in Vadnagar, a small town in northeastern Gujarat, Modi completed his secondary education there, and helped his father sell tea at the local railway station. He was introduced to the RSS at age eight.Modi left home after finishing high-school in part due to child marriage to Jashodaben Chimanlal Modi, which he abandoned and publicly acknowledged only many decades later. Modi travelled around India for two years and visited a number of religious centres before returning to Gujarat. In 1971 he became a full-time worker for the RSS. During the state of emergency imposed across the country in 1975, Modi was forced to go into hiding. The RSS assigned him to the BJP in 1985 and he held several positions within the party hierarchy until 2001, rising to the rank of general secretary'
        },
        {
            name:'Justin Trudeau',
            title:'Canada Prime Minister',
            image:'/trudeau.jpeg',
            description: 'Justin Pierre James Trudeau PC MP is a Canadian politician who has served as the 23rd prime minister of Canada since 2015 and has been the leader of the Liberal Party since 2013. Trudeau won the leadership of the Liberal Party in April 2013 and led his party to victory in the 2015 federal election, moving the third-placed Liberals from 36 seats to 184 seats, the largest-ever numerical increase by a party in a Canadian federal election. Born in Ottawa, Trudeau attended Collège Jean-de-Brébeuf, graduated from McGill University in 1994 with a Bachelor of Arts degree in literature, then in 1998 acquired a Bachelor of Education degree from the University of British Columbia. After graduating he taught French, humanities, math and drama at the secondary school level in Vancouver. Initially relocating back to Montreal in 2002 to further his studies; advocacy work related to youth and environmental issues would be his primary focus; serving as chair for the youth charity Katimavik, as director of the not-for-profit Canadian Avalanche Association and was appointed as chair for the "Task Force on Youth Renewal" by the Liberals in 2006.'
        },
        {
            name:'Joseph Biden',
            title:'American President',
            image:'/biden.jpeg',
            description: 'Joseph Robinette Biden Jr. is an American politician who is serving as the 46th and current president of the United States. A member of the Democratic Party, he served as the 47th vice president from 2009 to 2017 under Barack Obama and represented Delaware in the United States Senate from 1973 to 2009. In 2008, he successfully passed the PROTECT Our Children Act, which was aimed at addressing the online exploitation of children. Biden has played a role in foreign policy, serving as chairman of the Senate Foreign Relations Committee three times. He spoke passionately about the need to place sanctions on Apartheid-era South Africa in 1986 and advocated for intervention in Yugoslavia in the 1990s as that country descended into civil war and ethnic cleansing. He also pushed for former Eastern Bloc countries to join NATO after the fall of the Soviet Union, which many of them did.'
        },
        {
            name:'Alexander Boris Johnson',
            title:'Britain Prime Minister',
            image:'/boris.jpeg',
            description: 'Alexander Boris de Pfeffel Johnson is a British politician and writer serving as Prime Minister of the United Kingdom and Leader of the Conservative Party since July 2019. He was Secretary of State for Foreign and Commonwealth Affairs from 2016 to 2018 and Mayor of London from 2008 to 2016. Since Boris Johnson has taken over as Conservative leader and prime minister, he has crushed the opposition with an 80 seat majority, banished Jeremy Corbyn to his allotment, and got a Brexit deal through the Commons with a united Conservative Party. Any objective observer must accept that Boris Johnson’s political achievements have been extremely significant.'
        }
    ]
    return (
        <div className="ListPage">
            <div className="Header">
                <h1>Leaders of the World</h1>
            </div>
            <div className="List">
                {
                    leadersList.map(leaderDetails => {
                        return <Card name={leaderDetails.name}
                                     title={leaderDetails.title}
                                     description={leaderDetails.description}
                                     image={leaderDetails.image}>
                                     </Card>
                    })
                }
            </div> 
        </div>
        
    )
}

export default List;