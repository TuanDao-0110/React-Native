/* eslint-disable no-unused-vars */
import { render, screen } from '@testing-library/react-native';
import { RepositoryListContainer } from '../components/RepositoryList';
import { NativeRouter } from 'react-router-native';
import { Provider as PaperProvider } from 'react-native-paper';


describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
        // eslint-disable-next-line jest/expect-expect
        it('renders repository information correctly', () => {
            const repositories = {
                totalCount: 8,
                pageInfo: {
                    hasNextPage: true,
                    endCursor:
                        'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                },
                edges: [
                    {
                        node: {
                            id: 'jaredpalmer.formik',
                            fullName: 'jaredpalmer/formik',
                            description: 'Build forms in React, without the tears',
                            language: 'TypeScript',
                            forksCount: 1619,
                            stargazersCount: 21856,
                            ratingAverage: 88,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars2.githubusercontent.com/u/4060187?v=4',
                        },
                        cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                    },
                    {
                        node: {
                            id: 'async-library.react-async',
                            fullName: 'async-library/react-async',
                            description: 'Flexible promise-based React data loader',
                            language: 'JavaScript',
                            forksCount: 69,
                            stargazersCount: 1760,
                            ratingAverage: 72,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars1.githubusercontent.com/u/54310907?v=4',
                        },
                        cursor:
                            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    },
                ],
            };
            render(
                        <RepositoryListContainer repositories={repositories} />
                // <NativeRouter>
                //     <PaperProvider>
                //     </PaperProvider>
                // </NativeRouter>
            )
            const repositoryItems = screen.getAllByTestId('repositoryItem');
            const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;
            for (let i of repositories.edges) {
                expect(screen.getByText(i.node.fullName)).toBeDefined()
                expect(screen.getByText(i.node.language)).toBeDefined()
                expect(screen.getByText(i.node.id)).toBeDefined()
            }
        });
    });
});