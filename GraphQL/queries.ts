import {gql} from 'graphql-request';

export const ALL_ITEMS_DATA = gql`
  {
    item(path: "/sitecore/content/XmCloudPreview/home", language: "en") {
      children {
        results {
          id
          name
        }
      }
    }
  }`