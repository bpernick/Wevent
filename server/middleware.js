module.exports.prettifyHostingEventsForDashboard = (hosting) => {
  const newHosting = [];
  let newEvent = {};
  hosting.forEach((event) => {
    if (newEvent.title !== event.title) {
      if (newEvent.title) {
        newHosting.push(newEvent);
        newEvent = {};
      }
      newEvent.title = event.title;
      newEvent.pending = event.pending;
      newEvent.event_id = event.event_id;
    } else {
      newEvent.pending += event.pending;
    }
  });
  newHosting.push(newEvent);
  return newHosting;
};

module.exports.prettifyHostingForEventInfo = (info) => {
  const newInfo = [];
  const newEvent = { pending: [], attending: [] };
  info.forEach((event) => {
    if (newEvent.title !== event.title) {
      if (newEvent.title) {
        newInfo.push(newEvent);
      }
      Object.assign(newEvent, event);
      newEvent.pending = [];
      newEvent.attending = [];
    } else if (event.pending) {
      newEvent.pending.push(event.display_name);
    } else if (event.pending === 0) {
      newEvent.attending.push(event.display_name);
    }
  });
  delete newEvent.display_name;
  newInfo.push(newEvent);
  return newInfo;
};
