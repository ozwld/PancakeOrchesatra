import React, { useContext } from "react";
import firebase from "../../../utils/Firebase";

import useSWR from "swr";
import { debriEntity } from "./Types";
import { Converter } from "./Converter";

const Convert = new Converter();
const collection_key = "debris";

/**
 * Firestore の指定されたコレクションからデータを取ってくる
 *
 * @param collection_key 指定のコレクションにアクセス
 */
export async function getDatabseItems() {
  const ref = await firebase.firestore().collection(collection_key).get();
  const result: any = [];
  ref.docs.map((doc) => {
    result.push(Convert.toEntity(doc.id, doc.data()));
  });
  return JSON.parse(JSON.stringify(result));
}

/**
 * Firestore の指定されたコレクションにItemを保存する
 *
 * @param entity
 */
export async function setDatabseItems(entity: debriEntity): Promise<void> {
  // FIXME valideteいるかも
  const ref = await firebase
    .firestore()
    .collection(collection_key)
    .doc()
    .set(Convert.toItems(entity))
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}
