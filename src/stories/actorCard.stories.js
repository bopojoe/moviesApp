import React from "react";
import ActorCard from "../components/actorCard";
import ActorList from "../pages/actorListPage";
import data from "./sampleActors";
import singleActor from "./singleActor";
import single from "./singleActor"

export default {
  title: "actors/actorcard",
  component: ActorCard,
};

export const Basic = () => <ActorCard actor={single} />;
Basic.storyName = "Default";

export const List = () =><ActorList cast={data.cast} />
