import ICAL from "ical.js";

export const AddReminders = (jCalData: any) => {
  //clone JCalData
  const clonedData = ICAL.helpers.clone(jCalData, true);
  //create component from data
  const comp = new ICAL.Component(clonedData);
  //get a list of all events
  const events = comp.getAllSubcomponents("vevent");
  //For each event
  for (const component of events) {
    //add a subcomponent named valarm
    component.addSubcomponent(new ICAL.Component("valarm"));
    //save first subcomponent named valarm
    const valarmSubcomponent = component.getFirstSubcomponent("valarm");
    //add alarm properties
    valarmSubcomponent.addProperty(
      new ICAL.Property.fromString("ACTION:DISPLAY")
    );
    valarmSubcomponent.addProperty(
      new ICAL.Property.fromString("TRIGGER;RELATED=START:-PT6H")
    );
  }
  return clonedData;
};
