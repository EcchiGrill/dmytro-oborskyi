import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type CreateProjectInput = {
  description: Scalars['String']['input'];
  description_uk: Scalars['String']['input'];
  git_link?: InputMaybe<Scalars['String']['input']>;
  img: Scalars['String']['input'];
  img_desktop?: InputMaybe<Scalars['String']['input']>;
  img_laptop?: InputMaybe<Scalars['String']['input']>;
  img_mobile?: InputMaybe<Scalars['String']['input']>;
  link: Scalars['String']['input'];
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  tags: Array<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addFeaturedProject: Project;
  createProject: Project;
  removeFeaturedProject: Project;
  removeProject: Project;
  updateProject: Project;
};


export type MutationAddFeaturedProjectArgs = {
  uid: Scalars['String']['input'];
};


export type MutationCreateProjectArgs = {
  createProjectInput: CreateProjectInput;
};


export type MutationRemoveFeaturedProjectArgs = {
  uid: Scalars['String']['input'];
};


export type MutationRemoveProjectArgs = {
  uid: Scalars['String']['input'];
};


export type MutationUpdateProjectArgs = {
  updateProjectInput: UpdateProjectInput;
};

export type OrderByInput = {
  createdAt?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
};

export type Project = {
  __typename?: 'Project';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  description_uk: Scalars['String']['output'];
  git_link?: Maybe<Scalars['String']['output']>;
  img: Scalars['String']['output'];
  img_desktop?: Maybe<Scalars['String']['output']>;
  img_laptop?: Maybe<Scalars['String']['output']>;
  img_mobile?: Maybe<Scalars['String']['output']>;
  link: Scalars['String']['output'];
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  tags: Array<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Query = {
  __typename?: 'Query';
  featuredProjects: Array<Project>;
  getProject: Project;
  projects: Array<Project>;
};


export type QueryFeaturedProjectsArgs = {
  orderBy?: InputMaybe<Array<OrderByInput>>;
};


export type QueryGetProjectArgs = {
  uid: Scalars['String']['input'];
};


export type QueryProjectsArgs = {
  orderBy?: InputMaybe<Array<OrderByInput>>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type UpdateProjectInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  description_uk?: InputMaybe<Scalars['String']['input']>;
  git_link?: InputMaybe<Scalars['String']['input']>;
  img?: InputMaybe<Scalars['String']['input']>;
  img_desktop?: InputMaybe<Scalars['String']['input']>;
  img_laptop?: InputMaybe<Scalars['String']['input']>;
  img_mobile?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  uid: Scalars['String']['input'];
};

export type ProjectsQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<OrderByInput> | OrderByInput>;
}>;


export type ProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', uid: string, name: string, tags: Array<string>, order?: number | null, link: string, git_link?: string | null, img: string, img_laptop?: string | null, img_desktop?: string | null, img_mobile?: string | null, description: string, description_uk: string, createdAt: any }> };

export type FeaturedProjectsQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<OrderByInput> | OrderByInput>;
}>;


export type FeaturedProjectsQuery = { __typename?: 'Query', featuredProjects: Array<{ __typename?: 'Project', uid: string, name: string, tags: Array<string>, order?: number | null, link: string, git_link?: string | null, img: string, img_laptop?: string | null, img_desktop?: string | null, img_mobile?: string | null, description: string, description_uk: string, createdAt: any }> };

export type CreateProjectMutationVariables = Exact<{
  createProjectInput: CreateProjectInput;
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject: { __typename?: 'Project', name: string, tags: Array<string>, order?: number | null, link: string, description: string, description_uk: string, img: string, img_mobile?: string | null, img_desktop?: string | null, img_laptop?: string | null, git_link?: string | null } };

export const namedOperations = {
  Query: {
    Projects: 'Projects',
    FeaturedProjects: 'FeaturedProjects'
  },
  Mutation: {
    CreateProject: 'CreateProject'
  }
}

export const ProjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Projects"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderByInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"git_link"}},{"kind":"Field","name":{"kind":"Name","value":"img"}},{"kind":"Field","name":{"kind":"Name","value":"img_laptop"}},{"kind":"Field","name":{"kind":"Name","value":"img_desktop"}},{"kind":"Field","name":{"kind":"Name","value":"img_mobile"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"description_uk"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<ProjectsQuery, ProjectsQueryVariables>;
export const FeaturedProjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FeaturedProjects"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderByInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"featuredProjects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"git_link"}},{"kind":"Field","name":{"kind":"Name","value":"img"}},{"kind":"Field","name":{"kind":"Name","value":"img_laptop"}},{"kind":"Field","name":{"kind":"Name","value":"img_desktop"}},{"kind":"Field","name":{"kind":"Name","value":"img_mobile"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"description_uk"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<FeaturedProjectsQuery, FeaturedProjectsQueryVariables>;
export const CreateProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createProjectInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProjectInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createProjectInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createProjectInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"description_uk"}},{"kind":"Field","name":{"kind":"Name","value":"img"}},{"kind":"Field","name":{"kind":"Name","value":"img_mobile"}},{"kind":"Field","name":{"kind":"Name","value":"img_desktop"}},{"kind":"Field","name":{"kind":"Name","value":"img_laptop"}},{"kind":"Field","name":{"kind":"Name","value":"git_link"}}]}}]}}]} as unknown as DocumentNode<CreateProjectMutation, CreateProjectMutationVariables>;