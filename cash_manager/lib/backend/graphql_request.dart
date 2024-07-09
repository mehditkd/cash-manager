import 'package:dio/browser.dart';
import 'package:dio/dio.dart';
import 'package:graphql_flutter/graphql_flutter.dart';

DataProvider() {
    final dio = Dio();
    final adapter = BrowserHttpClientAdapter();
    adapter.withCredentials = true;
    dio.httpClientAdapter = adapter;
    _client = GraphQLClient(
      link: Link.from([DioLink(Constants.dataProviderPath, client: dio)]),
      cache: GraphQLCache(),
    );
  }

  Future<UserContextModel> get userContext async {
    try {
      final result = await _client.query(
        QueryOptions(
          fetchPolicy: FetchPolicy.cacheFirst,
          document: gql(r"""
          query {
            context {
              getUserContext {
                id
                name
                site {
                  id
                  organizationId
                  siteGroupIds
                  name
                  boundsCoordinate
                  installation {
                    id
                    siteId
                    name
                    installationType
                  }
                }
                siteGroup {
                  id
                  organizationId
                  name
                }
              }
            }
          }
          """),
          pollInterval: const Duration(seconds: 10),
        ),
      );
      if (result.hasException) throw result.exception!;
      List<Object?> objects = result.data?['context']?['getUserContext'];
      List<Map<String, dynamic>> context =
          objects.whereType<Map<String, dynamic>>().toList();
      return UserContextModel.fromList(context: context);
    } catch (e) {
      window.console.log(e);
      showErrorSnackBar("Failed to get user context");
      return UserContextModel();
    }
  }