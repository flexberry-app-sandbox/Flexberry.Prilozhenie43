import { Serializer as БазаДанныхSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-43-база-данных';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(БазаДанныхSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
