//Second Way
import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { withRoomConsumer } from '../context';
import Loading from './Loading';

const RoomsContainer = ({ context }) => {
   const { loading, sortedRooms, rooms } = context;

   if (loading) {
      return (
         <Loading />
      );
   } else {

      return (
         <div>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
         </div>
      );
   }
};

export default withRoomConsumer(RoomsContainer);


//First Way
// import React from 'react';
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';
// import { RoomConsumer } from '../context';
// import Loading from './Loading';

// const RoomsContainer = () => {
//    return (
//       <RoomConsumer>
//          {
//             (value) => {
//                const { loading, sortedRooms, rooms } = value;
//                console.log(loading)

//                if (loading) {
//                   return (
//                      <Loading />
//                   );
//                } else {

//                   return (
//                      <div>
//                         <RoomsFilter rooms={rooms} />
//                         <RoomsList rooms={sortedRooms} />
//                      </div>
//                   );
//                }
//             }
//          }
//       </RoomConsumer>
//    );
// };

// export default RoomsContainer;
