import firebase from "../../../utils/Firebase";
import { debriEntity } from "./Types";

export class Converter {
  /**
   * Firestore 保存用のフォーマットへ変換
   */
  public toFireTimestamp(datetimeStr?: Date) {
    const timestamp = datetimeStr ? datetimeStr : new Date();
    // const timestamp = new Date();
    return firebase.firestore.Timestamp.fromDate(timestamp);
  }
  /**
   * ローカルで扱いやすいDate形式に変換
   */
  public toDateTimestamp(datetimeStr: Date) {
    const timestamp = datetimeStr ? datetimeStr : new Date();
    return datetimeStr.toDateString();
  }

  /**
   * Entity 形式の配列を Firestore のアイテムに変換
   *
   * @param entity フロントで触りやすいようにしていたEntity
   */
  public toItems(entity: debriEntity) {
    const toItem = {
      uid: entity.uid,
      body: entity.body,
      date: entity.date,
      created_at: this.toFireTimestamp(),
      rate: entity.rate,
    };
    return toItem;
  }

  /**
   * Firebase から取得したアイテムをエンティティに変換
   *
   * @param document_key 変換対象のドキュメントkey
   * @param Item Firestore から取得したRawItem
   * @return entity形式に変換した配列
   */
  public toEntity(document_key: string, Item: any) {
    const toEntity = {
      id: document_key,
      uid: Item.uid,
      body: Item.body,
      date: Item.date.toDate(),
      created_at: Item.created_at.toDate(),
      rate: Item.rate,
    };
    return toEntity;
  }
}
