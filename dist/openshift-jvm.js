

var OpenshiftJvm;
(function (OpenshiftJvm) {
    OpenshiftJvm.pluginName = "openshift-jvm";
    OpenshiftJvm.log = Logger.get(OpenshiftJvm.pluginName);
    OpenshiftJvm.templatePath = "plugins/openshift-jvm/html";
    OpenshiftJvm.version = {};
})(OpenshiftJvm || (OpenshiftJvm = {}));

var OpenshiftJvm;
(function (OpenshiftJvm) {
    OpenshiftJvm._module = angular.module(OpenshiftJvm.pluginName, []);
    OpenshiftJvm._module.run(["HawtioNav", "preferencesRegistry", function (nav, prefs) {
            nav.on(HawtioMainNav.Actions.CHANGED, OpenshiftJvm.pluginName, function (items) {
                items.forEach(function (item) {
                    switch (item.id) {
                        case 'jvm':
                        case 'wiki':
                            item.isValid = function () { return false; };
                    }
                });
            });
            prefs.addTab('About ' + OpenshiftJvm.version.name, UrlHelpers.join(OpenshiftJvm.templatePath, 'about.html'));
            OpenshiftJvm.log.info("started, version: ", OpenshiftJvm.version.version);
            OpenshiftJvm.log.info("commit ID: ", OpenshiftJvm.version.commitId);
        }]);
    OpenshiftJvm._module.controller('Main.About', ["$scope", function ($scope) {
        $scope.info = OpenshiftJvm.version;
    }]);
    hawtioPluginLoader.registerPreBootstrapTask(function (next) {
        $.ajax({
            url: 'version.json?rev=' + Date.now(),
            success: function (data) {
                try {
                    OpenshiftJvm.version = angular.fromJson(data);
                }
                catch (err) {
                    OpenshiftJvm.version = {
                        name: 'openshift-jvm',
                        version: ''
                    };
                }
                next();
            },
            error: function (jqXHR, text, status) {
                OpenshiftJvm.log.debug("Failed to fetch version: jqXHR: ", jqXHR, " text: ", text, " status: ", status);
                next();
            },
            dataType: "html"
        });
    });
    hawtioPluginLoader.addModule(OpenshiftJvm.pluginName);
})(OpenshiftJvm || (OpenshiftJvm = {}));

var OpenshiftJvm;
(function (OpenshiftJvm) {
    OpenshiftJvm._module.controller("OpenshiftJvm.MainController", ['$scope', 'ConnectOptions', function ($scope, ConnectOptions) {
            $scope.containerName = ConnectOptions.name || "Untitled Container";
            if (ConnectOptions.returnTo) {
                $scope.goBack = function () {
                    OpenshiftJvm.log.debug("Connect options: ", ConnectOptions);
                    window.location.href = ConnectOptions.returnTo;
                };
            }
        }]);
})(OpenshiftJvm || (OpenshiftJvm = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY2x1ZGVzLmpzIiwib3BlbnNoaWZ0LWp2bS90cy9vcGVuc2hpZnRKdm1HbG9iYWxzLnRzIiwib3BlbnNoaWZ0LWp2bS90cy9vcGVuc2hpZnRKdm1QbHVnaW4udHMiLCJvcGVuc2hpZnQtanZtL3RzL21haW5Db250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUNlQSxJQUFPLFlBQVksQ0FLbEI7QUFMRCxXQUFPLFlBQVksRUFBQyxDQUFDO0lBQ1IsdUJBQVUsR0FBRyxlQUFlLENBQUM7SUFDN0IsZ0JBQUcsR0FBbUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyx1QkFBVSxDQUFDLENBQUM7SUFDN0MseUJBQVksR0FBRyw0QkFBNEIsQ0FBQztJQUM1QyxvQkFBTyxHQUFPLEVBQUUsQ0FBQztBQUM5QixDQUFDLEVBTE0sWUFBWSxLQUFaLFlBQVksUUFLbEI7O0FDSkQsSUFBTyxZQUFZLENBK0NsQjtBQS9DRCxXQUFPLFlBQVksRUFBQyxDQUFDO0lBRVIsb0JBQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLHVCQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFcEQsb0JBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUscUJBQXFCLEVBQUUsVUFBQyxHQUEwQixFQUFFLEtBQUs7WUFDakYsR0FBRyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSx1QkFBVSxFQUFFLFVBQUMsS0FBSztnQkFDdEQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7b0JBQ2pCLE1BQU0sQ0FBQSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNmLEtBQUssS0FBSyxDQUFDO3dCQUNYLEtBQUssTUFBTTs0QkFDVCxJQUFJLENBQUMsT0FBTyxHQUFHLGNBQU0sT0FBQSxLQUFLLEVBQUwsQ0FBSyxDQUFDO29CQUMvQixDQUFDO2dCQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLHlCQUFZLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNuRixnQkFBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxvQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hELGdCQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxvQkFBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFSixvQkFBTyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsVUFBQyxNQUFNO1FBQ3RDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsb0JBQU8sQ0FBQztJQUN4QixDQUFDLENBQUMsQ0FBQztJQUVILGtCQUFrQixDQUFDLHdCQUF3QixDQUFDLFVBQUMsSUFBSTtRQUMvQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ0wsR0FBRyxFQUFFLG1CQUFtQixHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDckMsT0FBTyxFQUFFLFVBQUMsSUFBSTtnQkFDWixJQUFJLENBQUM7b0JBQ0gsb0JBQU8sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuQyxDQUFFO2dCQUFBLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ2Isb0JBQU8sR0FBRzt3QkFDUixJQUFJLEVBQUUsZUFBZTt3QkFDckIsT0FBTyxFQUFFLEVBQUU7cUJBQ1osQ0FBQztnQkFDSixDQUFDO2dCQUNELElBQUksRUFBRSxDQUFDO1lBQ1QsQ0FBQztZQUNELEtBQUssRUFBRSxVQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTTtnQkFDekIsZ0JBQUcsQ0FBQyxLQUFLLENBQUMsa0NBQWtDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUMzRixJQUFJLEVBQUUsQ0FBQztZQUNULENBQUM7WUFDRCxRQUFRLEVBQUUsTUFBTTtTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUdILGtCQUFrQixDQUFDLFNBQVMsQ0FBQyx1QkFBVSxDQUFDLENBQUM7QUFDM0MsQ0FBQyxFQS9DTSxZQUFZLEtBQVosWUFBWSxRQStDbEI7O0FDaERELElBQU8sWUFBWSxDQVlsQjtBQVpELFdBQU8sWUFBWSxFQUFDLENBQUM7SUFFbkIsb0JBQU8sQ0FBQyxVQUFVLENBQUMsNkJBQTZCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsVUFBQyxNQUFNLEVBQUUsY0FBYztZQUNwRyxNQUFNLENBQUMsYUFBYSxHQUFHLGNBQWMsQ0FBQyxJQUFJLElBQUksb0JBQW9CLENBQUM7WUFDbkUsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLE1BQU0sQ0FBQyxNQUFNLEdBQUc7b0JBQ2QsZ0JBQUcsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsY0FBYyxDQUFDLENBQUM7b0JBQy9DLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQyxRQUFRLENBQUM7Z0JBQ2pELENBQUMsQ0FBQztZQUNKLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRU4sQ0FBQyxFQVpNLFlBQVksS0FBWixZQUFZLFFBWWxCIiwiZmlsZSI6ImNvbXBpbGVkLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsLCIvLy8gQ29weXJpZ2h0IDIwMTQtMjAxNSBSZWQgSGF0LCBJbmMuIGFuZC9vciBpdHMgYWZmaWxpYXRlc1xuLy8vIGFuZCBvdGhlciBjb250cmlidXRvcnMgYXMgaW5kaWNhdGVkIGJ5IHRoZSBAYXV0aG9yIHRhZ3MuXG4vLy9cbi8vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8vIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbi8vLyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbi8vL1xuLy8vICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4vLy9cbi8vLyBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4vLy8gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuLy8vIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuLy8vIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbi8vLyBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2luY2x1ZGVzLnRzXCIvPlxubW9kdWxlIE9wZW5zaGlmdEp2bSB7XG4gIGV4cG9ydCB2YXIgcGx1Z2luTmFtZSA9IFwib3BlbnNoaWZ0LWp2bVwiO1xuICBleHBvcnQgdmFyIGxvZzogTG9nZ2luZy5Mb2dnZXIgPSBMb2dnZXIuZ2V0KHBsdWdpbk5hbWUpO1xuICBleHBvcnQgdmFyIHRlbXBsYXRlUGF0aCA9IFwicGx1Z2lucy9vcGVuc2hpZnQtanZtL2h0bWxcIjtcbiAgZXhwb3J0IHZhciB2ZXJzaW9uOmFueSA9IHt9O1xufVxuIiwiLy8vIENvcHlyaWdodCAyMDE0LTIwMTUgUmVkIEhhdCwgSW5jLiBhbmQvb3IgaXRzIGFmZmlsaWF0ZXNcbi8vLyBhbmQgb3RoZXIgY29udHJpYnV0b3JzIGFzIGluZGljYXRlZCBieSB0aGUgQGF1dGhvciB0YWdzLlxuLy8vXG4vLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbi8vLyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4vLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vLy9cbi8vLyAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy8vXG4vLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuLy8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vLyBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbi8vLyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4vLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9pbmNsdWRlcy50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJvcGVuc2hpZnRKdm1HbG9iYWxzLnRzXCIvPlxubW9kdWxlIE9wZW5zaGlmdEp2bSB7XG5cbiAgZXhwb3J0IHZhciBfbW9kdWxlID0gYW5ndWxhci5tb2R1bGUocGx1Z2luTmFtZSwgW10pO1xuXG4gIF9tb2R1bGUucnVuKFtcIkhhd3Rpb05hdlwiLCBcInByZWZlcmVuY2VzUmVnaXN0cnlcIiwgKG5hdjpIYXd0aW9NYWluTmF2LlJlZ2lzdHJ5LCBwcmVmcykgPT4ge1xuICAgIG5hdi5vbihIYXd0aW9NYWluTmF2LkFjdGlvbnMuQ0hBTkdFRCwgcGx1Z2luTmFtZSwgKGl0ZW1zKSA9PiB7XG4gICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIHN3aXRjaChpdGVtLmlkKSB7XG4gICAgICAgICAgY2FzZSAnanZtJzpcbiAgICAgICAgICBjYXNlICd3aWtpJzpcbiAgICAgICAgICAgIGl0ZW0uaXNWYWxpZCA9ICgpID0+IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBwcmVmcy5hZGRUYWIoJ0Fib3V0ICcgKyB2ZXJzaW9uLm5hbWUsIFVybEhlbHBlcnMuam9pbih0ZW1wbGF0ZVBhdGgsICdhYm91dC5odG1sJykpO1xuICAgIGxvZy5pbmZvKFwic3RhcnRlZCwgdmVyc2lvbjogXCIsIHZlcnNpb24udmVyc2lvbik7XG4gICAgbG9nLmluZm8oXCJjb21taXQgSUQ6IFwiLCB2ZXJzaW9uLmNvbW1pdElkKTtcbiAgfV0pO1xuXG4gIF9tb2R1bGUuY29udHJvbGxlcignTWFpbi5BYm91dCcsICgkc2NvcGUpID0+IHtcbiAgICAkc2NvcGUuaW5mbyA9IHZlcnNpb247XG4gIH0pO1xuXG4gIGhhd3Rpb1BsdWdpbkxvYWRlci5yZWdpc3RlclByZUJvb3RzdHJhcFRhc2soKG5leHQpID0+IHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAndmVyc2lvbi5qc29uP3Jldj0nICsgRGF0ZS5ub3coKSwgXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZlcnNpb24gPSBhbmd1bGFyLmZyb21Kc29uKGRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICB2ZXJzaW9uID0ge1xuICAgICAgICAgICAgbmFtZTogJ29wZW5zaGlmdC1qdm0nLFxuICAgICAgICAgICAgdmVyc2lvbjogJydcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIG5leHQoKTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKGpxWEhSLCB0ZXh0LCBzdGF0dXMpID0+IHtcbiAgICAgICAgbG9nLmRlYnVnKFwiRmFpbGVkIHRvIGZldGNoIHZlcnNpb246IGpxWEhSOiBcIiwganFYSFIsIFwiIHRleHQ6IFwiLCB0ZXh0LCBcIiBzdGF0dXM6IFwiLCBzdGF0dXMpO1xuICAgICAgICBuZXh0KCk7XG4gICAgICB9LFxuICAgICAgZGF0YVR5cGU6IFwiaHRtbFwiXG4gICAgfSk7XG4gIH0pO1xuXG5cbiAgaGF3dGlvUGx1Z2luTG9hZGVyLmFkZE1vZHVsZShwbHVnaW5OYW1lKTtcbn1cbiIsIi8vLyBDb3B5cmlnaHQgMjAxNC0yMDE1IFJlZCBIYXQsIEluYy4gYW5kL29yIGl0cyBhZmZpbGlhdGVzXG4vLy8gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyBhcyBpbmRpY2F0ZWQgYnkgdGhlIEBhdXRob3IgdGFncy5cbi8vL1xuLy8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4vLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8vIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuLy8vXG4vLy8gICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbi8vL1xuLy8vIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbi8vLyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4vLy8gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4vLy8gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuLy8vIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwib3BlbnNoaWZ0SnZtUGx1Z2luLnRzXCIvPlxubW9kdWxlIE9wZW5zaGlmdEp2bSB7XG5cbiAgX21vZHVsZS5jb250cm9sbGVyKFwiT3BlbnNoaWZ0SnZtLk1haW5Db250cm9sbGVyXCIsIFsnJHNjb3BlJywgJ0Nvbm5lY3RPcHRpb25zJywgKCRzY29wZSwgQ29ubmVjdE9wdGlvbnMpID0+IHtcbiAgICAkc2NvcGUuY29udGFpbmVyTmFtZSA9IENvbm5lY3RPcHRpb25zLm5hbWUgfHwgXCJVbnRpdGxlZCBDb250YWluZXJcIjtcbiAgICBpZiAoQ29ubmVjdE9wdGlvbnMucmV0dXJuVG8pIHtcbiAgICAgICRzY29wZS5nb0JhY2sgPSAoKSA9PiB7XG4gICAgICAgIGxvZy5kZWJ1ZyhcIkNvbm5lY3Qgb3B0aW9uczogXCIsIENvbm5lY3RPcHRpb25zKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBDb25uZWN0T3B0aW9ucy5yZXR1cm5UbztcbiAgICAgIH07XG4gICAgfVxuICB9XSk7XG5cbn1cbiJdfQ==

angular.module("openshift-jvm-templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("plugins/openshift-jvm/html/about.html","<div ng-controller=\"Main.About\">\n  <p>Version: {{info.version}}</p>\n  <p>Commit ID: {{info.commitId}}</p>\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>\n          Name\n        </th>\n        <th>\n          Version\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr ng-repeat=\"(key, info) in info.packages\">\n        <td>{{key}}</td>\n        <td>{{info.version || \'--\'}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n");}]); hawtioPluginLoader.addModule("openshift-jvm-templates");